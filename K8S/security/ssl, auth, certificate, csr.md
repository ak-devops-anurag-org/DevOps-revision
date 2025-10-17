# Kubernetes Security Essentials

## Table of Contents
1. [Authentication](#authentication)
2. [Authorization](#authorization)
3. [SSL/TLS Basics](#ssltls-basics)
4. [TLS in Kubernetes](#tls-in-kubernetes)
5. [Creating TLS Certificates and CSR](#creating-tls-certificates-and-csr)

---

## Authentication

**Authentication** in Kubernetes is the process that verifies who you are before granting you access to the cluster.

- **Human Users**: Administrators, developers using kubectl or API calls.
- **Service Accounts**: Robot users representing processes or applications.

Kubernetes does NOT natively store user accounts. It relies on:
- Static files (CSV with usernames and passwords)
- Static token files (CSV with tokens, usernames, IDs, optional group)
- Certificates
- External identity providers (LDAP, Kerberos, etc.)

### Example: Static User File
Create a CSV file with user credentials:
```csv
password123,user1,u0001
password123,user2,u0002
```
Start the API server with:
```bash
kube-apiserver --basic-auth-file=user-details.csv
```

### Example: Token file
Create a CSV file:
```csv
KpjCVbI7cFAHYPkByTIzRb7gulcUc4B,user10,u0010,group1
```
Start the API server:
```bash
kube-apiserver --token-auth-file=user-token-details.csv
```

**Security Warning**: Never store plain text passwords/tokens in production; use certificates or integrate with external providers.

---

## Authorization

**Authorization** determines what authenticated users or machines are allowed to do within the cluster.

Mechanisms supported:
- Node Authorization
- Attribute-Based Authorization
- Role-Based Access Control (RBAC) — *recommended*
- Webhook Authorization

### Example: RBAC Policies
Create a policy file (for attribute-based auth):
```json
{"kind": "Policy", "spec": {"user": "dev-user", "namespace": "*", "resource": "pods", "apiGroup": "*"}}
```
For RBAC (preferred):
- Define roles and grant permissions (see RBAC documentation).

### API Server Configuration
Set authorization modes using:
```bash
--authorization-mode=Node,RBAC,Webhook
```
Multiple modes can be combined; requests will be evaluated in the specified order.

**Key Point**: RBAC is the Kubernetes standard. Always prefer RBAC for scalable, secure access management.

---

## SSL/TLS Basics

**TLS (Transport Layer Security)** is a security protocol that encrypts communications between clients (users/applications) and servers.

### Why? Encrypt data so that sensitive information (like passwords and tokens) cannot be intercepted during network communication.

### Main Points:
- **Symmetric encryption**: Same key for encrypt & decrypt. Not safe for sending keys over the network.
- **Asymmetric encryption**: Use a pair of public/private keys. Public key locks (encrypts), private key unlocks (decrypts).

#### SSH Key Example
```bash
# Generate SSH key pair
ssh-keygen
# Use private key for login
ssh -i id_rsa user1@server1
```

#### Web Server (HTTPS) Key Example
```bash
# Generate private key
openssl genrsa -out server.key 1024
# Extract public key
openssl rsa -in server.key -pubout > server.pem
```

### Certificate Signing Request (CSR)
Generate CSR to request a certificate:
```bash
openssl req -new -key server.key -out server.csr -subj "/C=US/ST=CA/O=MyOrg, Inc./CN=my-bank.com"
```
Send CSR to a Certificate Authority (CA) for signing.

---

## TLS in Kubernetes

Kubernetes uses TLS certificates everywhere to secure communication between its components:
- **API Server** uses server certificates (`api-server.crt`, `api-server.key`)
- **ETCD Server** uses certificates (`etcd-server.crt`, `etcd-server.key`)
- **Kubelets** use client certificates for authentication
- **Administrators** use client certificates (`admin.crt`, `admin.key`)

### Certificate file naming conventions:
- Public key files: `.crt`, `.pem`
- Private key files: `.key`, `-key.pem`

### CA (Certificate Authority)
Kubernetes clusters require at least one CA. All other certificates must be signed by this CA.
- CA itself: `CA.crt`, `CA.key`

---

## Creating TLS Certificates and CSR in K8s

### Step 1: Generate Private Key and CSR
```bash
openssl genrsa -out user.key 2048
openssl req -new -key user.key -out user.csr -subj "/CN=myuser"
```

### Step 2: Encode CSR (for Kubernetes API)
```bash
base64 -w 0 user.csr
```

### Step 3: Create CertificateSigningRequest YAML
Replace `<BASE64_CSR>` with your encoded request:
```yaml
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: myuser
spec:
  request: <BASE64_CSR>
  signerName: kubernetes.io/kube-apiserver-client
  expirationSeconds: 86400 # optional
  usages:
  - client auth
```
Apply CSR:
```bash
kubectl create -f myuser-csr.yaml
```

### Step 4: Approve the CSR
```bash
kubectl certificate approve myuser
```

### Step 5: Handle/Revoke Unwanted CSRs
```bash
kubectl get csr
kubectl certificate deny suspicious-csr
kubectl delete csr suspicious-csr
```

---

## Summary
- **Authentication** checks identity (via tokens, passwords, certificates).
- **Authorization** manages permissions (use RBAC for control).
- **SSL/TLS** encrypts data, uses certificates signed by CA.
- **TLS in K8s** secures cluster communications.
- **Certificate API** lets you automate user certificate requests and approvals.

**Always use secure, industry-standard practices—prefer RBAC and certificate-based authentication whenever possible.**
