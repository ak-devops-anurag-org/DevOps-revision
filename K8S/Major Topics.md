Major Topics - K8S 



# === Basics ===
## Architecture - 
  - control plane conponents
  - worker node components 

## Pod

## Services - 
  - Load balancer
  - Node Port service
  - Cluster IP services
  - other ? 

## Namespaces


Imperative and declerative commad
 

# === schuduling ===

## Manual scheduling 
yaml file - nodeName field

## Automatic scheduling
kube schedular in control plan looks for 
 - taint/toleration
 - Node selector, node affinity and anti-affinity
 - Resource availability (CPU/memory)
 - Pod constraints (if any)

## Range and Limit (resource quota ?)

## Deamon set 
when a new node is added a pod isautomatically scheduled - such as log/monitoring pod

## StatefulSets?  
A StatefulSet manages pods that require:
Stable, unique network ID
Stable storage (persistent volumes)
Ordered, graceful deployment and scaling

## static pods (Example - kube proxy pod is scheduled as static pod on every node)
Static Pods are special Pods managed directly by the kubelet on a specific node, rather than by the Kubernetes API server or control plane. They are used to ensure critical system components (like the API server, etcd, controller-manager, and scheduler) can run even before or without a fully running Kubernetes control plane

## Priority classes ?
## Multiple schedular ?



# === Monitoring Logs ===

## Metrix server 
## Prometheus + Grafana

# === Application Lifecycle Management ===

## Rolling updates and rollout
## 