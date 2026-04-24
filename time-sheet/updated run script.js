validateWeekData()
fillTimesheet();

// const timesheetData = {
//   "03-11-2025": [
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised multiple CRs for Python script execution and baseline point implementation",
//       hours: 1,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Validated DB patching and shared sign-off",
//       hours: 1,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Scheduled OS patching meeting; performed pre and post health checks and coordinated with patching team",
//       hours: 4,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 1,
//       minutes: 0
//     }
//   ],

//   "04-11-2025": [
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised multiple iSAC requests for password reset, email reactivation, and BGV update; verified InTrade application and Java setup on jump server",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Explored CI flow for CEP project; raised requests to update branch protection rules; installed required packages including Java and Podman",
//       hours: 3,
//       minutes: 30
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Call with InTrade teams for CR implementation and verified the app was working fine after CR implementation",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 30
//     }
//   ],

//   "05-11-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Session with Sahithya and Ruchi about L1 and L2 handover; discussed missing points and shared documents on SharePoint",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Explored InTrade tracker Excel and raised iSAC request for user password reset",
//       hours: 2,
//       minutes: 15
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Coordinated with OS patch team for post-patch issues",
//       hours: 2,
//       minutes: 15
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 30
//     }
//   ],

//   "06-11-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Connected with Manisha for L1 L2 handover doc; meeting with GC team and Shubham to start GC agent; call with Ajit for DB sync details",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised ServiceNow request for DB sync; collected data from Prod DB with Shubham; Helped Akshay with password reset issues",
//       hours: 3,
//       minutes: 30
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Call with Ruchi to discuss handover gaps and performance collection template; collected HDFC laptop",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 30
//     }
//   ],

//   "07-11-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Call with Akshay regarding HDFC laptop setup; meeting with Sahithya and Ajit to discuss InTrade connectivity and PostgreSQL server issues",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised GitHub access requests; performed OS patch scheduling with BSG approval and SPOC coordination",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Performed pre and post health checks, and validated start/stop scripts on UAT during patch activity",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 30
//     }
//   ]
// };

// --- existing automation logic below ---

// const timesheetData = {
//   "10-11-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Call with Abhishek from BSG; discussion with Ananditha and Shubham for script testing; discussion with Eric and Sai on GKE deployment; call with DevOps support regarding GitHub access",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Created excel with latest CEP updates and shared with Sahithya and Abhishek; raised iSAC request to unlock user ID",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Went to HDFC branch for laptop setup",
//       hours: 3,
//       minutes: 0
//     }
//     // No stand-up call
//   ],

//   "11-11-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Connected with Akshay and Sahithya for ID unlock and VDI issue; calls with Shubham for start/stop script; call with Ajit for data sync activity",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Visited HDFC branch IT team for laptop setup, domain setup, formatting, asset mapping",
//       hours: 4,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand-up call",
//       hours: 0,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Faced issue accessing VDI and worked on resolution",
//       hours: 0,
//       minutes: 30
//     }
//   ],

//   "12-11-2025": [
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Visited HDFC branch for laptop setup and policy update",
//       hours: 4,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Call with Shubham regarding closing of CR; connected with Govinda; closed python script CR",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised multiple whitelisting requests; raised CyberArk access request; updated CEP excel sheet",
//       hours: 1,
//       minutes: 20
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand-up call",
//       hours: 0,
//       minutes: 40
//     }
//   ],

//   "13-11-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Discussion with Sahithya about L1 L2 handover; call with Ajit regarding password encryption update; discussion with DevOps support on GitHub license; call with Govinda to close CR",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Updated tracker; raised network firewall request for prod env; resolved Prod Quest DB disk issue with Ajit; tried resolving Zscaler issue",
//       hours: 4,
//       minutes: 20
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand-up call",
//       hours: 0,
//       minutes: 40
//     }
//   ],

//   "14-11-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Zscaler issue resolution with FM team; visited HDFC branch for LAN connectivity; resolved Teams access issue; verified URLs are accessible on personal WiFi",
//       hours: 4,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Connected with Shubham (InTrade team), and performed the pre/post health checks and start/stop activity for DB pathc",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised ServiceNow requests for SFTP issue, CyberArk access ",
//       hours: 1,
//       minutes: 30
//     }
//     // Stand-up call 0 min — not added
//   ]
// };

// const timesheetData = {
//   "17-11-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Call with Govinda to close Python CR; call with Ananditha and Shubham for script testing in UAT; discussion with Sahithya and Akshay on pending requests",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Closed Python CR; checked GitHub access for InTrade users; updated BGV of two users; raised iSAC request for pass reset; raised URL whitelisting request",
//       hours: 3,
//       minutes: 20
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand-up call",
//       hours: 0,
//       minutes: 40
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Scheduled call with L1 L2 team to close open points",
//       hours: 1,
//       minutes: 0
//     }
//   ],

//   "18-11-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Connected with Akshay and Sahithya to close earlier requests; call with Akshay and Shubham for SFTP issue; understood LDAP issue",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised multiple iSAC requests (Unlock ID, email reactivation); raised SMTP request for bulk email; helped Sai and team start CI for CEP",
//       hours: 3,
//       minutes: 20
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Follow-up on pending requests",
//       hours: 0,
//       minutes: 40
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand-up call",
//       hours: 0,
//       minutes: 40
//     }
//   ],

//   "19-11-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Discussion with Sahithya and L1 L2 team to close open points; call with Akshay, VDI and AD team for access issues; call with Sahithya and Sai for SMTP issue",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised iSAC request for new ADID creation and unlock requests; follow-up on pending requests",
//       hours: 2,
//       minutes: 20
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand-up call",
//       hours: 0,
//       minutes: 40
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Discussion on documents to be shared for L1 L2 handover",
//       hours: 2,
//       minutes: 0
//     }
//   ],

//   "20-11-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Discussion with Sahithya on VDI and CyberArk issues; discussion with Manisha, InTrade team and BSG on blockers for pre prod release",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Call with BSG, Sai, Akashy and Govinda to resolve deployed portal access issue; connected with SFTP team",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised incident for VDI and CyberArk; closed network firewall change request",
//       hours: 2,
//       minutes: 30
//     }
//     // Stand-up call 0 min (not attended, so not included)
//   ],

//   "21-11-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Call with Akshay and Govinda to set up SFTP external ID; troubleshooting call with Shubham, Sahithya and SFTP team; call with Sai and Manoj for CI testing",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Set up SFTP external ID; mapped public key to InTrade env; raised new VDI request; raised ISAC request for ADID enable/unlock",
//       hours: 4,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Key mismatch issue resolution and coordination with SFTP team",
//       hours: 1,
//       minutes: 0
//     }
//     // Stand-up not attended → no entry
//   ]
// };


// const timesheetData = {
//   "24-11-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Multiple calls with SFTP team for internal SFTP creation; troubleshooting call with InTrade and Network Security team for connectivity testing; calls with different HDFC team members for SFTP approvals",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised tickets for Jenkins workspace access, Zscaler issue, generic ADID creation, password reset, VDI access, SFTP creation",
//       hours: 4,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Follow-up coordination calls regarding approvals and troubleshooting",
//       hours: 1,
//       minutes: 0
//     }
//   ],

//   "25-11-2025": [
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Started CR creation process for Prod release; formatted CR documentation; raised CR; made updates requested by Change Processing team",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls with Virtual Desktop support for Zscaler and VDI issues; calls with Change Processing Team; calls with Sahithya, Shubham and Akshay",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Resolved Sahil VDI issue",
//       hours: 1,
//       minutes: 30
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand-up call",
//       hours: 0,
//       minutes: 30
//     }
//   ],

//   "26-11-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls with Sahil and Saidheeraj for connectivity issues; call with Sahithya on CR and VDI updates; call with FMSupport to resolve Zscaler issue",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Obtained approvals for CR; resolved VDI and CyberArk issues; raised ISAC requests for CyberArk, internal SFTP, and password reset; raised Network Firewall ticket",
//       hours: 3,
//       minutes: 20
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Follow-up calls with Manisha and team on updates",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand-up call",
//       hours: 0,
//       minutes: 40
//     }
//   ],

//   "27-11-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Prepared for CAB call; attended CAB meeting for CR approval; re-raised Network firewall requests; resolved CyberArk issue for Shubham",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Call with Ananditha, Prashant and Shubham for UAT CI testing; follow-ups with SFTP team for Shubham SFTP ISAC request",
//       hours: 2,
//       minutes: 50
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "PROD release call for InTrade application",
//       hours: 2,
//       minutes: 10
//     }
//     // Stand-up not attended → no entry added
//   ],

//   "28-11-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Multiple calls with AD and SFTP support for Generic ADID creation for internal SFTP setup; call with Sai and team for UAT CEP CICD; call with Sai, Manoj and team for CI testing",
//       hours: 3,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised tickets for updated LDAP password, Generic ADID generation",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Helped users access server using proper CyberArk request",
//       hours: 1,
//       minutes: 30
//     }
//     // Stand-up not attended → no entry
//   ]
// };


// const timesheetData = {
//   "08-12-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Call with VDI team to troubleshoot Zscaler issue; coordination with Vivek for Prod to pre-prod DB data sync activity.",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Troubleshooting UI (node service) issue with Linux, OS patch and InTrade teams; server restart coordination and issue resolution.",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls with Govinda, Sai, AD support and Firewall team for network firewall requests, LDAP credentials and updates.",
//       hours: 1,
//       minutes: 40
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Explored and updated CEP project evidence excel sheet; followed up on pending requests.",
//       hours: 0,
//       minutes: 40
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call [40 min]",
//       hours: 0,
//       minutes: 40
//     }
//   ],

//   "09-12-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls with Sahithya and Akshay; Sai and VDI team for VDI-related issues; handover discussion with Sahithya and L1/L2 team for InTrade application.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Raised and followed up tickets for Guardicore command access, DB backup issue, password reset for user and generic ID, and VDI issues.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Prepared for L1/L2 meet, verified L1/L2 documents and explored guidance to onboard a project on GCP cloud.",
//       hours: 2,
//       minutes: 0
//     }
//   ],

//   "10-12-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Deployment walkthrough calls with Tanzeem and team; deployment automation discussion with Prashant, Shubham and InTrade team.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Tested connectivity from InTrade server to 360T; shared failure details with respective teams.",
//       hours: 1,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Closed ISG approval via ServiceNow ticket; received required excel sheet for ACG password handover.",
//       hours: 1,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Followed up on pending tickets and mails; raised requests for ISAC vendor expiry update and Checkmarx login access.",
//       hours: 2,
//       minutes: 0
//     }
//   ],

//   "11-12-2025": [
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Explored SOP shared by cloud team and started onboarding process of CEP application on PROD.",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls with Ashish for ACG password handover; SFTP team and Akshay for key mapping; Deepak for IS audit excel sheet updates.",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Troubleshooting connectivity with network firewall team for 360T destination testing.",
//       hours: 1,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Raised tickets to unlock ID and network firewall request for port opening.",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand-up call [30 min]",
//       hours: 0,
//       minutes: 30
//     }
//   ],

//   "12-12-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Troubleshooting call with Akshay for 360T connectivity; discussion with Ajit on 360T and architecture.",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls with DBA team for ACG password expiry and Deepak for IS audit sheet update.",
//       hours: 1,
//       minutes: 30
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Troubleshooting pod-to-pod connectivity issue with Sai and cloud netsec team.",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Architecture walkthrough call with InTrade application L1 and L2 teams; raised network firewall request for port opening.",
//       hours: 2,
//       minutes: 0
//     }
//   ]
// };


// const timesheetData = {
//   "16-12-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls and meetings with Manish Dixit and Akshay; extended troubleshooting call with Sai, Govinda, AD team and Development team to resolve LDAP authentication issue.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Verified LDAP credentials, attempted resolution of authentication errors and initiated Terraform workspace creation.",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Updated implementation and backout plan for ACG password handover; raised requests for CyberArk access, GitHub group creation and WinSCP SFTP issue.",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "L1/L2 handover activities: updated SharePoint with latest documents, scheduled app configuration walkthrough and shared documents and meeting links.",
//       hours: 1,
//       minutes: 0
//     }
//   ],

//   "17-12-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Troubleshooting call with Sai, Govinda and team to resolve LDAP authentication issue.",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "360T connectivity troubleshooting with InTrade, Firewall and Guardicore teams; raised Guardicore request to allow required port 7001 and coordinated connectivity testing with Akshay.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "L1/L2 handover walkthrough by Ajit covering application configuration and services; shared all relevant documents with L1/L2 team.",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Raised requests for vendor expiry updates in ISAC, CyberArk access and mobile access for Outlook and Teams.",
//       hours: 1,
//       minutes: 0
//     }
//   ],

//   "18-12-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls with Sachin for L1/L2 handover documents; Anandita and Akshay for InTrade deployment automation; Sai and SFTP team for WinSCP issue; multiple discussions with DBA team.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Worked on and closed multiple change requests including 360T and GCP network firewall CRs and ACG password handover CR; collected documents and initiated CRs.",
//       hours: 3,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Followed up on multiple ISAC requests and explored/updated relevant evidence in IS-Audit excel sheet.",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand-up call [30 min]",
//       hours: 0,
//       minutes: 30
//     }
//   ],

//   "19-12-2025": [
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "ACG password handover CR work including setting password expiry to never, updating documents and following up for change approvals.",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Connections and discussions with Abhishek, Sai and Mohit for CEP deployed website credentials; Ajit and Shubham for L1/L2 discussion; Bala ji for change approval; Rohan for urgent CR to collect InTrade data; Eric for IS audit sheet.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Meeting for deployment automation of InTrade application on UAT.",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Collected relevant evidence to raise a new CR for data collection from InTrade application and closed the change CR.",
//       hours: 1,
//       minutes: 30
//     }
//   ]
// };






// const timesheetData = {
//   "22-12-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls with FM team and IT team to troubleshoot laptop WiFi issue; coordination with Ajit and Shubham for updates and availability; discussions with Sai for HR portal update and Deepak for IS Audit excel.",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Worked on multiple change requests including baseline CR closure and GCP port opening CR.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Explored and updated CEP IS audit excel sheet with relevant evidence.",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Resolved laptop WiFi issue with IT team (CT client WiFi).",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 30
//     }
//   ],

//   "23-12-2025": [
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Worked on and closed change requests including network firewall port opening and DB user password expiry set to never; verified unused firewall rules and shared details with InTrade team.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Raised requests for Outlook mobile access, enabling ISAC IDs, disabling users who left the project and GitHub access.",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls with Gaurav for UAT certification renewal, developer for GitHub access and license validation, and Mohit for CEP HR login credentials and bug discussion.",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "L1/L2 handover activities including app configuration walkthrough and late-night call with InTrade to implement change for BSG data collection.",
//       hours: 1,
//       minutes: 0
//     }
//   ],

//   "24-12-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "L1/L2 handover demo sessions including demo deployment walkthrough with Shubham and Ajit; shared relevant documents and updated Sahithya on progress.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "CICD pipeline discussion call.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Troubleshooting Checkmarx issue, verified credentials, requested new secret and coordinated with development team.",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls with development and InTrade teams to support IS audit evidence walkthrough and late-night implementation call to collect BSG-required data.",
//       hours: 1,
//       minutes: 0
//     }
//   ],

//   "25-12-2025": [
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Holiday.",
//       hours: 0,
//       minutes: 0
//     }
//   ],

//   "26-12-2025": [
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Password handover discussions and completion with ACG team for UAT and PROD InTrade application.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Calls with Manoj and Sai for CI/CD pipeline and Checkmarx report; coordination with development team to test API connectivity for CEP project.",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Client Meeting",
//       taskValue: "286",
//       description: "Discussion with Sahithya to share CEP project updates and InTrade L1/L2 handover status.",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "285",
//       description: "Raised request for ACG password handover and updated change documents; re-raised production change for InTrade application.",
//       hours: 2,
//       minutes: 0
//     }
//   ]
// };


const timesheetData = {
  "29-12-2025": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Multiple calls with Sarthak, Anitha and DevOps support team to troubleshoot Java build issues; discussions with Sahithya and InTrade team on InTrade infrastructure.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Troubleshot package fetching and gcloud authentication issues; obtained server access and resolved encountered errors.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sai for Checkmarx reports and gcloud auth issue; shared Checkmarx report with team.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Re-raised network firewall request to retain rules and followed up on pending requests and mails.",
      hours: 1,
      minutes: 0
    },
    {
      task: "Internal Discussion",
      taskValue: "287",
      description: "Stand up call [30 min]",
      hours: 0,
      minutes: 30
    }
  ],

  "30-12-2025": [
    {
      task: "Other",
      taskValue: "285",
      description: "Closed incident raised for BSG data collection and cancelled related change requests.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Meetings with Anitha, Sarthak and DevOps support to resolve JFrog issue; discussion with Tanvi on ServiceNow cloud server discovery process.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Shweta and Akshay for InTrade deployment automation; Eric for Checkmarx reports and JFrog updates; Rohan for InTrade firewall rules retention.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Resolved JFrog connectivity for local HDFC laptop testing; explored and updated InTrade server discovery excel sheet.",
      hours: 2,
      minutes: 0
    }
  ],

  "31-12-2025": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Tanvi for audit excel sheet; Sai and Manoj for JFrog issue; Audit team for discovery-related queries.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Govinda and Sai for CEP DB connectivity testing on HDFC laptop; troubleshooting call with CEP developers and Cloud team.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Raised network firewall request for DB connectivity; integrated user with CyberArk for CEP server; JFrog repo creation.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Followed up on pending requests and mails.",
      hours: 1,
      minutes: 0
    }
  ],

  "01-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Troubleshooting call with Shweta, Akshay and SFTP team to resolve connectivity issue; discussions with Akshay and Govinda for URL whitelisting.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Call with Purva to resolve Checkmarx project creation; verified JFrog repository creation on portal.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Updated template excel for CyberArk user integration; raised requests for SFTP port opening, Akshay CyberArk access, user integration and safe creation for CEP Prod environment.",
      hours: 3,
      minutes: 0
    }
  ],

  "02-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Connections with Mohit for CEP password reset testing; Sai for JFrog issue; Shweta, Akshay and Shubham for InTrade deployment automation.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with SFTP team for port opening; Call with Sahithya and team for STRIDE and PASTA sheet updates.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Raised request for DB user update; obtained DB baseline approval and attached documents to SharePoint for L1/L2 handover.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "InTrade UAT OS patch coordination with Akshay including pre and post health checks; resolved DB connectivity issue with DBA team.",
      hours: 3,
      minutes: 0
    }
  ]
};


const timesheetData = {
  "05-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Mohit and Sai to resolve CEP HR portal credentials issue; discussion with Akshay for ISAC request related to IAM role and service account creation on GCP.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sahithya, ISG and Development team to work on STRIDE and PASTA sheets, collect relevant evidence and discuss blockers and connectivity issues.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Worked on PROD infra setup discussions with Govinda; raised requests for CyberArk server access, service account and IAM role creation, Terraform workspace creation and GC agent enablement on UAT InTrade server.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Worked on Terraform workspace and infrastructure creation for CEP PROD; reviewed DB and OS baseline reports and shared status with Sahithya.",
      hours: 0,
      minutes: 30
    },
    {
      task: "Internal Discussion",
      taskValue: "287",
      description: "Stand up call [30 min]",
      hours: 0,
      minutes: 30
    }
  ],

  "06-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Abhishek, Sahithya and ISG team to identify solutions for DB connectivity and cloud-related issues.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with L2 team and Sahithya to address new open points; call with Akshay to get updates and approvals on software installation requests.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Multiple calls with Firewall and Cloud teams to obtain approvals for DB connectivity from HDFC laptop and initiate required changes.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Updated network firewall request for DB connectivity and raised request to resolve VDI issue faced by Sai; continuous follow-ups and updates via Teams and email.",
      hours: 1,
      minutes: 30
    }
  ],

  "07-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sai and Eric regarding Google Cloud Storage and PostgreSQL DB connectivity; discussions with Ajit, Shubham and L2 team to close open handover points.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Shweta for InTrade app deployment automation and with InTrade team regarding new patch release.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Multiple calls with Abhishek, Cloud and Network Firewall teams regarding rule implementation for PostgreSQL DB connectivity.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Raised ISAC request to unlock ID for Shubham; worked on CEP PROD application cloud onboarding request; updated STRIDE and PASTA sheets and followed up on pending requests and mails.",
      hours: 1,
      minutes: 30
    }
  ],

  "08-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Troubleshooting call with Abhishek and Snapwork team for PostgreSQL DB connectivity; coordination with Net Firewall team to raise updated request with correct destination IP.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Govinda for project creation updates; discussions with Sai and team to resolve Google Cloud Storage access issues; discussion with Abhijeet on InTrade handover.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Worked on GCS access error and raised new service account creation request with required roles.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Multiple phone calls with Network Firewall and Cloud teams for approvals; worked on and closed InTrade users-related incident.",
      hours: 2,
      minutes: 0
    }
  ],

  "09-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Abhishek, Sahithya and Dev team to share latest CEP UAT updates; discussion with Sai to verify GCS bucket access using service account.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Firewall team for PostgreSQL DB connectivity change updates; coordination with L2 team to close open points for InTrade handover; FM team call for IDE installation and version verification.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Raised requests for DL group creation for CEP PROD on GCP and to obtain all network firewall rules for InTrade application; updated DL group template excel sheets.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Updated CEP PROD plan sheet shared by Govinda and worked on open points for InTrade application handover.",
      hours: 2,
      minutes: 0
    }
  ]
};

const timesheetData = {
  "12-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Troubleshooting call with Abhishek, Dev and Cloud teams to test DB connectivity from HDFC laptop; discussion with Akshay to whitelist DB download URL.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Neeraj and Cloud team for CEP PROD project creation; coordination with Sai, Purva and DevOps support to resolve Checkmarx issue.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Downloaded DB setup details for local configuration; raised password reset requests for Snapwork users and multiple whitelisting requests.",
      hours: 3,
      minutes: 0
    }
  ],

  "13-01-2026": [
    {
      task: "Other",
      taskValue: "285",
      description: "Software download and installation for CEP testing on HDFC laptop for multiple users; follow-ups with Web Security team for whitelisting and downloads.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Akshay for Snapwork user password reset; AD support for SSL certificates; Abhishek and team for IS Audit sheet updates; discussion with Gajanand on SSL integration in HDFC environment.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Shweta, Akshay and SFTP team regarding deployment automation.",
      hours: 1,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Raised requests for password reset and correct SSL certificates for CEP UAT environment.",
      hours: 1,
      minutes: 0
    }
  ],

  "14-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Rohan for production change request; Govinda for project creation and SSL certificate; Virtual Desktop support for software installation.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Worked on obtaining correct SSL certificates and planning DB sync from PROD to pre-prod DB server.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Prepared, updated and raised change requests for CUG 2.1 release for InTrade; collected required documents.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Followed up on pending requests and mails.",
      hours: 1,
      minutes: 0
    }
  ],

  "15-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Multiple calls with FM and Virtual Desktop support teams for software installation.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Worked on IS Audit excel sheet updates.",
      hours: 4,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Accessed CyberArk and updated all firewall rules for InTrade handover on SharePoint.",
      hours: 1,
      minutes: 0
    }
  ],

  "16-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with L1 and L2 teams regarding handover; calls with Rohan for UAT and PROD DB sync for InTrade; discussion with Eric on PII data encryption and SSL updates.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Prajwal for software installation; coordination with InTrade team on new CUG 1.2 patch release for PROD.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "285",
      description: "Updated documents to initiate change; coordination with Shubham and Change processing team; obtained required change approvals.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Connected with InTrade team for change implementation including late night call; raised requests for IAM role (Govinda) and PROD to UAT DB data replacement.",
      hours: 1,
      minutes: 0
    }
  ]
};

// 19-Jan-2026 to 23-Jan-2026
const timesheetData = {
  "19-01-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on PROD release change, attached required evidence and closed the CR; closed change related to port opening.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Akshay for Snapwork user and generic ADID password reset; discussion with Sai for SSL setup.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Rohan for DB baseline failed points and firewall request; discussion with Purva, Sai and team to resolve Jenkins Checkmarx issue.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised URL whitelisting request and multiple port and firewall requests for BSG to access InTrade application.",
      hours: 2,
      minutes: 0
    }
  ],

  "20-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Worked with Sai on SSL and Checkmarx issues; discussions with Sai, Govinda and AD support for SSL certificates.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Akshay and SFTP team to resolve SFTP server connectivity issues.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Prasad, Purva, Sai and Web Security team to troubleshoot Checkmarx issues; discussion with Cloud team and Neeraj for CEP PROD project creation.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for DB user credentials sharing with Backup Admin team, SSL issue resolution with AD team and Checkmarx issue with Web Security team; followed up on pending requests and mails.",
      hours: 2,
      minutes: 0
    }
  ],

  "21-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Bhushan for software installation queries; Rohan and Saidheeraj for IP whitelisting of InTrade; Shubham for DB replication from PROD to UAT.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with AD team for SSL updates and with Sankir Guhar for DB patching activity for InTrade application.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on obtaining correct SSL certificates for HTTPS implementation and planning DB sync from PROD to pre-prod DB server.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Performed pre and post health checks during DB patching activity with Akshay; raised vendor expiry update requests and followed up on pending mails.",
      hours: 2,
      minutes: 0
    }
  ],

  "22-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Troubleshooting call for InTrade URL access for BSG; discussion with Abhishek on IS audit sheet updates.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with BSG and Dev team on CEP UAT updates and blockers; discussions with Sahithya, Ajit, L1 and L2 teams for InTrade handover.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Edgar, Sai and Eric regarding Checkmarx reports; worked with Sai to extract required Checkmarx report.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Resolved DB server access for InTrade UAT via CyberArk; raised requests for vendor expiry update on ISAC, service account creation and DB access resolution.",
      hours: 1,
      minutes: 30
    }
  ],

  "23-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Attended CEP status call with Abhishek, Eric and team; discussions with Abhishek, Sai, Govinda, Sahithya and team on IS audit sheet for CEP.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on IS audit excel sheet; coordinated with Sanket for SQL installation and with Sahithya and Sanket for DB installation and setup.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Saidheeraj and Rohan for InTrade URL access issue; coordination with Cloud IAM team for CEP PROD Google Cloud Console access; discussions with Akshay and Shubham regarding DB replication.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Request raised - Guardicore request to allow InTrade UAT access, network firewall requests,LDAP ID creation.",
      hours: 1,
      minutes: 0
    }
  ]
};

// 26th Jan to 30th Jan 2026
const timesheetData = {
  "26-01-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Public holiday.",
      hours: 0,
      minutes: 0
    }
  ],

  "27-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Firewall, Guardicore and Ajit teams to resolve production issue; discussion with Abhishek on CEP updates and IS audit sheet status.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Cloud team, Ketan, Neeraj and Sahithya to troubleshoot DB connectivity from HDFC laptop; call with Eric and team for Checkmarx reports.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with FM team and Eric team for software installation; coordination with AD and SIEM admin teams to resolve password issues.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for DB replication import activity and LDAP password authentication issue; followed up on pending requests and mails.",
      hours: 1,
      minutes: 0
    }
  ],

  "28-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sahithya, Sandip and Akshay for laptop password issue; discussions with Rohan, Darpan and team on incorrect DB replication.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Worked with Sai, Sahithya and Prajwal to set up MySQL locally; calls with Eric and Abhishek to obtain latest Checkmarx reports and download via portal.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for LDAP user authentication issue resolution, VDI password issues (Eric, Apurva) and schema data revert for InTrade UAT.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Visited HDFC branch to obtain LAN connectivity for laptop password issue and followed up on pending requests and mails.",
      hours: 1,
      minutes: 0
    }
  ],

  "29-01-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Abhishek, Sai and Dev team for IS audit sheet updates; discussion with Sahithya on backup failure for InTrade PROD DB server.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sagar and DB backup team to troubleshoot credential and backup issues; coordination with Eric, Siddhesh and Sumit for password issues.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on IS audit excel sheet, collected relevant evidence and uploaded documents to SharePoint.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for vendor expiry update on ISAC, DB backup user unlock for InTrade PROD, Guardicore SFTP issue and troubleshooting support for Backup Admin team.",
      hours: 1,
      minutes: 0
    }
  ],

  "30-01-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Collected evidence and closed multiple change requests; worked on obtaining required access for CEP PROD on GCP.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Cloud IAM team to attach required roles to BYOK key; discussions with AD team for correct LDAP credentials and Dev team for user configuration.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Atul for InTrade UAT DB backup setup and with Shweta and SFTP team for internal SFTP ID creation.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for BYOK role attachment, CEP UAT server access, LDAP password issue, password reset and internal SFTP ID creation for InTrade UAT.",
      hours: 1,
      minutes: 0
    }
  ]
};

// 02 Feb 2026 to 06 Feb 2026
const timesheetData = {
  "02-02-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Mohit and Abhishek for CMT credentials; coordination with OS and DB baseline teams for scheduling; call with Gaurav for certificate renewal.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Backup Admin team, Oracle DBA team and Backup Admin team for backup-related coordination.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for CEP group creation, generic ID creation, role addition to service account, whitelisting and static IP, and DB backup user unlock.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Followed up on pending requests and mails.",
      hours: 1,
      minutes: 30
    }
  ],

  "03-02-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Troubleshooting call with Sahithya and development team for frontend image fetching issue.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Anitha and FM team to enable DB connectivity locally from HDFC laptop.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Harshal, Sai and Atish to resolve private key issues for encryption and decryption; coordination with Neeraj for PROD resource provisioning.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Follow-up with Rohan for DB baseline failed points schedule and raised backup issue request with DBA team.",
      hours: 2,
      minutes: 30
    }
  ],

  "04-02-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sahithya, Sai, Akshay and development team to resolve image fetch issue.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with AD team for newly created IDs and password reset; discussions with Cloud Proxy team and Sai for Checkmarx issue.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with IAM team for CEP PROD access and AD team to sync admin group for CEP console access.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for CEP repo group access, ID creation and password reset, generic ID password reset and admin group addition; followed up on pending requests and mails.",
      hours: 2,
      minutes: 0
    }
  ],

  "05-02-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Rohan and OS patch team regarding InTrade patching activity; coordination with Sahithya and multiple teams for DB connectivity.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with WAF team to obtain CSR for InTrade certificate; calls with GCP and other teams to identify solution for cloud DB connectivity.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Worked with team on jump server setup and successfully established cloud DB connectivity from HDFC laptop.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for role addition to service account and resolution of VDI issue.",
      hours: 1,
      minutes: 30
    }
  ],

  "06-02-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sai and Sahithya to discuss Sonar reports and access; discussions with Shweta and team on auto-deployment updates. Call with Rohan to discuss InTrade OS And DP patching schedule.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Troubleshooting calls with Backup Admin and DBA teams for backup failure; coordination with Neeraj and IAM team for CEP PROD permissions and console access.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised password reset, Sonar access, CyberArk access, IAM role and API access requests; updated InTrade UAT certificate renewal and followed up on pending requests and mails.",
      hours: 2,
      minutes: 30
    }
  ]
};

const timesheetData = {
  "09-02-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sai and Purva to resolve Checkmarx issue; discussion with OS and DB baseline team for patch schedule; coordination with Moiz regarding OS and DB patch updates.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Roshan for GCP console integration template, Neeraj for GCP infra updates and Siddhant for generic ID integration to access CEP PROD.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Resolved Checkmarx Jenkins pipeline issues (403 and 401 token errors); obtained OS and DB patch schedule for InTrade UAT and performed pre and post health checks.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests to enable ADID for user and enable Microsoft 365 Outlook for CEP.",
      hours: 1,
      minutes: 30
    }
  ],

  "10-02-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with AD and IAM to add Generic ID to GCP Admin group; Oracle DB team to set password expiry to never; discussion with Neeraj and Cloud IAM team for service account creation.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Raised network firewall request for InTrade API, tested connectivity, attached evidence and closed the change.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "DB patch activity coordination with Rohan and DB team; scheduled activity, performed pre and post health checks and coordinated service stop with Shubham.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for Generic ID mailbox creation, password reset and ID unlock.",
      hours: 1,
      minutes: 30
    }
  ],

  "11-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked with Akshay to raise change for resolving UAM PROD issue; obtained required approval and moved change to schedule stage.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Rohan and Akshay to raise change for UAM PROD issue; discussion with Vivek and DBA team to create new user and set password expiry to never.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Moiz on patch for InTrade PROD servers; coordination with Ajit and team to implement UAM patch; follow-up with Shubham for UAT status and certificate updates.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for SonarQube access, GitHub repo creation and UAT repo access; followed up on pending requests and mails.",
      hours: 2,
      minutes: 0
    }
  ],

  "12-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on IS audit excel sheet; obtained approval to set password expiry to never; worked on acquiring admin access for CEP PROD.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Neeraj and Cloud NetSec to modify CEP PROD subnet; discussion with Mohit to obtain private key for InTrade certificate.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with Akshay and AD team to resolve Generic ID password issue for admin access.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised URL whitelisting request and request to confirm user password handover to ACG.",
      hours: 1,
      minutes: 30
    }
  ],

  "13-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on enabling required access for CEP PROD on GCP and integrated CEP PROD console access via CyberArk.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sachin, Sahithya and InTrade team to discuss infrastructure requirements; coordination with Akshay to onboard new engineer to CEP project and discuss InTrade UAT certificate.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with FM team for HDFC laptop compliance; coordination with Sai for SFTP, CyberArk and Redis issues; call with CyberArk team to resolve CEP server access.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for CEP PROD subnet modification, CEP SFTP issue resolution, ISAC new ADID creation and GitHub repo creation; followed up on pending requests and mails.",
      hours: 1,
      minutes: 30
    }
  ]
};




// 16 Feb 2026 to 20 Feb 2026
const timesheetData = {
  "16-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Modified CEP PROD subnet and obtained required approval; worked on DB baseline excel sheet for PROD implementation.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Sai Dheeraj and Pratik on DB baseline; coordination with ACG team for user password handover using split password method.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Neeraj for GCP infra updates; discussion with Akshay and team regarding InTrade UAT certificate; coordination with CyberArk and Cloud NetSec teams for server integration and subnet modification.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for GitHub access, GitHub repo creation, ISAC server integration to CyberArk and VDI request for Sanket.",
      hours: 1,
      minutes: 30
    }
  ],

  "17-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Generated latest Checkmarx report and shared with Eric and development team.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Sahithya to share latest updates; coordination with Sai, Deepak and team to resolve CORS issue at CEP UAT load balancer.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sanket for gate pass and VDI setup; coordination with Govinda and Cloud IAM for CEP PROD GCP console access; discussion with VDI team for new VDI provisioning.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Saidheeraj and InTrade team regarding certificate integration and patch release.",
      hours: 1,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for VDI setup, mailbox enablement and group expiry update.",
      hours: 1,
      minutes: 0
    }
  ],

  "18-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Migrated PrismaCloud container image scan tool from Clair; completed URL whitelisting and Quay token generation; performed prerequisites and shared with respective teams.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Closed change for DBBACKUP user expiry set to never; performed pre and post health checks for InTrade PROD DB patch.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with Rohan and Akshay on DB replication from PROD to UAT; discussions with DBA team for import/export activities; calls with Sahithya and Sanket for VDI access and setup.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for PrismaCloud URL whitelisting, Quay token generation and Jenkins access; followed up on pending requests and mails.",
      hours: 1,
      minutes: 0
    }
  ],

  "19-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on change for InTrade new release to PROD and obtained required approvals.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sahithya and Darpan for change approval; discussion with Abhishek regarding CEP HR and CMT portal; coordination with Rohan on change and DB patch updates.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Connected with InTrade team to implement the change; call with FM team to resolve Atish laptop issue.",
      hours: 3,
      minutes: 30
    },
  ],

  "20-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on ASST sheet for evidence collection; helped Akshay to raise a change.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Deepak, Sai and Sanket to work on ASST sheet; coordination with Sanket and Akshay for internet issue; discussion with Rohan on InTrade PROD OS patch.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Sai and Neeraj on new DB provisioning and KMS issue; coordination with CyberArk and CMDB teams for new server integration; calls with Ajit and Akshay to fix PROD UI issue.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for user and server integration in CyberArk and mailbox request for new engineer; followed up on pending requests and mails.",
      hours: 1,
      minutes: 30
    }
  ]
};

// 23 Feb 2026 to 27 Feb 2026
const timesheetData = {
  "23-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Accessed CEP PROD servers via CyberArk and resolved all InTrade-related incidents.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordinated InTrade OS patch activity including pre and post health checks and service restarts with InTrade team.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Akshay for change request support; Sanket for ASST, STRIDE and PASTA sheets; deployment automation testing with Akshay and Shashi on UAT; follow-up with Rohan to close incidents.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Coordination with Sai and Siddhant on secret manager; group addition by Amit to InTrade IT support; raised requests for group addition, password reset and DSB change request.",
      hours: 2,
      minutes: 0
    }
  ],

  "24-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on SIEM port opening and integrated CEP PROD jump server with CyberArk; attached PVT results and closed multiple change requests.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Rohan on DB baseline schedule; coordination with Gaurav regarding CEP PROD certificates.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sai and Neeraj to resolve Google Secret Manager and DB provisioning issues; discussion with Kinshuk for SIEM port opening.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for Sonar AD group addition and KMS encryption enablement for CloudSQL.",
      hours: 1,
      minutes: 30
    }
  ],

  "25-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Tested CyberArk access for CEP PROD server using HDFC user; closed InTrade-related incidents; worked on change to integrate CMDB user on CEP PROD servers.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Sanket on ASST and STRIDE evidence; coordination with Govinda for CEP PROD port openings and agent installation on jump servers.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Cloud team for approval and implementation; coordination with Sai to establish required connectivity to GKE cluster.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for CyberArk access and multiple port opening requests for CEP PROD connectivity.",
      hours: 1,
      minutes: 0
    }
  ],

  "26-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on change to enable required connectivity for CEP PROD and obtained required approvals.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with Janki for 27x7 agent setup on CEP PROD jump server; discussion with Sai on Sonar and Checkmarx updates.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Cloud IAM team, Neeraj and Sai to resolve Secret Manager permission issues; coordination with Prashant, Akshay and Shubham to place JAR files on SFTP server.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for CyberArk server access and IAM role/service account creation.",
      hours: 1,
      minutes: 0
    }
  ],

  "27-02-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on PostgreSQL DB baseline, collected evidence and shared via mail.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with Sanket and Akshay for PostgreSQL DB baseline; discussions with Sai, Rothi and Neeraj to resolve DB proxy, connectivity and Secret Manager role/permission issues.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Requirement gathering for CICD signoff with Anand, Rishabh, Sahithya and Sai; troubleshooting SFTP issue with Shubham, Prashant and SFTP team.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised network firewall request for Prisma Defender setup on cluster; Sonar access issue, SFTP issue and role/permission addition to service account.",
      hours: 1,
      minutes: 30
    }
  ]
};

// 02 Mar 2026 to 06 Mar 2026
const timesheetData = {
  "02-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Collected evidence and closed subnet modification change; worked on IS audit sheet and resolved InTrade-related incidents.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Sanket and Priyanka on CEP ASST sheet; coordination with Shubham to test external SFTP connectivity and Sai to resolve DB connectivity issues.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sahithya and Govinda regarding CEP PROD user flow and certificates; discussion with Sahithya on SIEM integration.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised IAM role requests",
      hours: 1,
      minutes: 0
    }
  ],

  "03-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Holi holiday on client side.",
      hours: 0,
      minutes: 0
    }
  ],

  "04-03-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sahithya, Dev team and Sai to troubleshoot API issue; coordination with AD team to unlock ID and discussion with Abhishek on new ID creation for CEP UAT testing.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with SFTP team to resolve external SFTP connectivity issue.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "OS patch activity for InTrade UAT servers including coordination with Shubham and InTrade team and performing pre and post health checks.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for role addition and ID unlock.",
      hours: 1,
      minutes: 0
    }
  ],

  "05-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on multiple user integrations to CyberArk for CEP and InTrade projects; verified documentation and obtained change approval.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Cloud NetSec team regarding connectivity issue between cluster and Jenkins VM and updates on connectivity change requests.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with Sanket and Neeraj regarding cloud backup; discussion with Neeraj on default port update and Prisma scan updates.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for user integration in CyberArk and server access.",
      hours: 1,
      minutes: 0
    }
  ],

  "06-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on change for InTrade PROD and implemented data collection change from InTrade servers.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordinated InTrade PROD OS patch activity including pre and post health checks.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Neeraj regarding DB connectivity port change and CyberArk integration password updates with Linux team.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Prashant and InTrade team for deployment automation testing and with Pritam regarding Prisma Defender; coordination with Sanket and Neeraj to start CEP backup activity.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Followed up on pending requests and mails.",
      hours: 0,
      minutes: 30
    }
  ],
};

// 09 Mar 2026 to 13 Mar 2026
const timesheetData = {
  "09-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on OS baseline failed points for InTrade servers and coordinated closure of failed checks.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sanket and Neeraj regarding CEP automated backup; coordination with Shubham and Linux team to close OS baseline failed points.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with FIM support team for FIM agent integration and with Pratap, Firewall and Cloud NetSec teams to resolve CEP portal access issues.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Discussions with Sahithya for agent integration updates and with Sai to collect required auth logs for SIEM integration; raised CyberArk user integration and firewall request for InTrade.",
      hours: 1,
      minutes: 0
    }
  ],

  "10-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Configured Jenkins agent on Jenkins VM for CEP PROD and collected evidence to close InTrade change.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with DevOps support team regarding Jenkins agent configuration.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Rohan and Akshay regarding OS baseline update and schedule; discussion with Govinda and Sahithya regarding VA scan updates.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Sai, Manoj and team to understand CD pipeline configuration.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for password reset, Git repository creation and Jenkins agent configuration.",
      hours: 0,
      minutes: 0
    }
  ],

  "11-03-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sahithya and Sanket regarding IS audit sheet updates; coordination with AD team to verify LDAP ID status and configuration support from Abhishek and team.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Neeraj to resolve connectivity issue from Jenkins agent to GKE cluster; coordination with Sai for required roles and with Manoj regarding CICD updates for CEP PROD.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "InTrade firmware update activity including calls with Shubham and InTrade team to perform pre and post health checks and stop relevant services.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised multiple requests to update expiry and ownership of AD groups and to add roles and permissions to service accounts.",
      hours: 1,
      minutes: 0
    }
  ],

  "12-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on change preparation for InTrade new PROD release and verified documentation for raising the change.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Obtained ISG approval for CloudSQL port opening and coordinated with InTrade team regarding new patch release.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Moiz on CyberArk user integration for InTrade; call with Eric to obtain required auth logs for SIEM integration.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sanket, Chetan and Cloud IAM team regarding DAM integration and resolving CEP connectivity issues.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised firewall request for LDAP connectivity for CEP project.",
      hours: 0,
      minutes: 30
    }
  ],

  "13-03-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Troubleshooting call with team to resolve OBI API connectivity issue.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Sai and DevOps support team to resolve Jenkins issue; follow-up with Neeraj on pending tasks.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sanket regarding IS audit sheet; Rahul for InTrade firewall request; discussion with Sahithya on updates and pending tasks.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for CyberArk server access and updated firewall port opening for LDAP and API gateway; followed up on pending requests and mails.",
      hours: 2,
      minutes: 0
    }
  ]
};

// 16 Mar 2026 to 20 Mar 2026
const timesheetData = {
  "16-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on getting required approval for DB connectivity and coordinated with ISG for DB port opening approval.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sanket and Sushant regarding IS audit; discussion with Moiz on OS baseline and Saidheeraj on URL whitelisting.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with Mahesh for CEP automated backup; discussion with Guardicore team for required whitelisting and with Sahithya for approvals.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised Guardicore request for InTrade and CyberArk server access; follow-up with Shubham and Akshay on change updates and OS baseline points.",
      hours: 1,
      minutes: 0
    }
  ],

  "17-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on multiple CEP changes, collected evidence and closed CR changes.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Govinda regarding VAPT scan and follow-ups; call with Rohan for InTrade change updates.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Purva and Dev team to resolve CXone portal issue; coordination with Sai for CICD and CEP frontend Checkmarx issue.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised request for Sanket CyberArk access.",
      hours: 1,
      minutes: 0
    }
  ],

  "18-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on DB connectivity for Dev team and SIEM and DAM integration activities.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Govinda and Sridhar regarding VA point remediation; discussion with Darpan for URL whitelisting updates.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with Sanket for CyberArk and Checkmarx access and availability; calls with Atish and VDI team for DB connectivity.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for Checkmarx portal access for Sanket and DB connectivity for multiple users.",
      hours: 1,
      minutes: 0
    }
  ],

  "19-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Holiday on client side.",
      hours: 0,
      minutes: 0
    }
  ],

  "20-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on multiple CEP changes, collected relevant evidence and closed CR changes.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on DAM and SIEM integration including checklist creation and setup of proxy and DB connectivity from CEP jump server.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Govinda regarding VAPT scan and remediation; coordination with Sahithya and InTrade team on deployment automation.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised CyberArk server access request and followed up on pending requests and mails.",
      hours: 1,
      minutes: 0
    }
  ]
};

// 23 Mar 2026 to 27 Mar 2026
const timesheetData = {
  "23-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Helped Sai to establish DB connectivity from CEP jump host using SSL authentication.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sanket for Checkmarx and CyberArk access; coordination with Prashant and InTrade team for deployment automation.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Eric and Pavan for auth logs; coordination with VAPT team for CEP PROD server signoff and with Sai and Neeraj for DB connectivity.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Follow-up with Backup Admin team for InTrade PROD backup issue; raised requests for role permission addition and multiple ISAC group access for Jenkins and CXone.",
      hours: 2,
      minutes: 0
    }
  ],

  "24-03-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sanket and Neeraj regarding automated backup; coordination with Oracle DBA team to enable audit for DBBACKUP user.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Sanket for kubectl upgrade and with VAPT team to re-scan CEP PROD servers.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with VDI team to assist Dev team with DB connectivity; coordination with Backup Admin, DBA and ACG teams to resolve InTrade DB backup issue.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for vendor ADID expiry updates, VDI request for Eshan and kubectl whitelisting setup.",
      hours: 2,
      minutes: 0
    }
  ],

  "25-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Worked on DAM integration.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sai and Sahithya regarding CEP PROD deployment; coordination with DBA, ACG and Backup Admin team to resolve InTrade backup issue.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Sanket for firewall port opening request and Guardicore team for port 22 rule and InTrade URL whitelisting.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for Jenkins pipeline auto trigger issue, password reset, user login issue, CCIL password update and Guardicore URL whitelisting; followed up on pending requests and mails.",
      hours: 1,
      minutes: 30
    }
  ],

  "26-03-2026": [
    {
      task: "Other",
      taskValue: "288",
      description: "Holiday at client side.",
      hours: 0,
      minutes: 0
    }
  ],

  "27-03-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sai, Sahithya and Dev team to resolve CEP WAF issue; coordination with Sanket and Neeraj for new firewall requests.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Web Security team for cloud point URL whitelisting issue in InTrade; coordination with Akshay and DBA team for InTrade UAT DB backup.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Govinda for VA report closure and WAF integration; troubleshooting GCS file upload issue with Sai and Dev team; call with Cloud WebSec team.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for InTrade UAT DB backup, password resets (Ajit, Eshan), login issue for Jihan and followed up on pending requests and mails.",
      hours: 1,
      minutes: 30
    }
  ]
};


// 30 Mar 2026 to 03 Apr 2026
const timesheetData = {
  "30-03-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sanket and Sushant regarding IS audit; discussion with Rohan and Guardicore team on firewall port 22 and updated port opening.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with Pritam for CWPP and CSPM reports; follow-up with Neeraj to close open points for CSPM reports.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussion with Sai to resolve GCS media upload issue.",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised ISAC requests for user ID unlock, password reset and vendor expiry update.",
      hours: 2,
      minutes: 0
    }
  ],

  "31-03-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Rohan regarding UAT patch and automated deployment; discussions with Sanket and DevOps team on GitHub and Sonar architecture updates.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with Sahithya and Anitha on SIEM auth log requirements; follow-up with Sanket on pending requests and cloud cost optimization.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Neeraj on MBSS report and DAM integration; coordination with Linux admin team to resolve proxy issue for CloudPoint URL.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests to add Sanket to GCP groups for console access, ADID disable request and password reset for Eshan.",
      hours: 1,
      minutes: 30
    }
  ],

  "01-04-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Rohan for OS patch schedule; coordination with Saidheeraj for API connectivity with InTrade UAT servers.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Sanket for pending CEP requests; coordination with OS baseline team for InTrade server baseline.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Eric and team to resolve Flutter and Git issues; coordination with Shubham and InTrade team for UAT patch pre/post health checks and service operations.",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised firewall request for SCB X API connectivity and support requests for Flutter issue resolution.",
      hours: 1,
      minutes: 0
    }
  ],

  "02-04-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sai, Neeraj and Sanket regarding cloud cost optimization; coordination with Akshay and Shubham to resolve node issue post UAT patching.",
      hours: 2,
      minutes: 30
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Firewall team for InTrade port opening; calls with Sumit and Dev team to resolve Flutter and Git issues.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Discussions with Ashutosh and Sandip on TCO; coordination with Sai, Sahithya and Atish to understand DSFTP issue.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for AD group user addition, enabling macro in Excel for InTrade testing and resolving Flutter/Git issues.",
      hours: 1,
      minutes: 30
    }
  ],

  "03-04-2026": [
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with Sandip sir regarding TCO for InTrade application; discussions with Sai and Sanket on pending items.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Coordination with Dev team and App Control support to resolve Flutter issue; discussions with Sahithya, Sai and Sanket on DPCFTP issue.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Client Meeting",
      taskValue: "286",
      description: "Calls with InTrade and Guardicore team regarding proxy and node service issues.",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised requests for TCO, network firewall and app user creation for DPCFTP; followed up on pending requests and mails.",
      hours: 2,
      minutes: 0
    }
  ]
};


function preventSubmission() {
  const allButtons = document.querySelectorAll('button');
  allButtons.forEach(btn => {
    const btnText = btn.textContent.trim().toLowerCase();
    if (btn.className.includes('primary-btn') || btnText.includes('submit')) {
      btn.style.backgroundColor = '#ff4444';
      btn.style.border = '2px solid red';
      btn.title = 'Script active - manual submission required';
    }
  });
  console.log('🛡️ Submit buttons highlighted - manual submission required');
}

function selectDropdownValue(dropdown, value) {
  if (dropdown && dropdown.value !== undefined) {
    dropdown.value = value;
    dropdown.dispatchEvent(new Event('change', { bubbles: true }));
    dropdown.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
  }
  return false;
}

function fillTextArea(textarea, text) {
  if (textarea) {
    // Properly set value (bypasses React/Angular synthetic blocks)
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
    nativeInputValueSetter.call(textarea, text);

    // Trigger all relevant events for frameworks to detect change
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    textarea.dispatchEvent(new Event('change', { bubbles: true }));
    textarea.dispatchEvent(new Event('blur', { bubbles: true }));

    return true;
  }
  return false;
}


function clickAddButton(button) {
  if (button) {
    button.click();
    return new Promise(resolve => setTimeout(resolve, 800));
  }
  return Promise.resolve();
}

function formatTimeValue(value) {
  return value.toString().padStart(2, '0');
}

function getTimesheetRowsForDate(dateString) {
  const rows = [];
  const allRows = document.querySelectorAll('.timesheets-card');
  let isTargetDate = false;
  for (let row of allRows) {
    const dateElement = row.querySelector('.date-val');
    if (dateElement && dateElement.textContent.trim().includes(dateString)) {
      isTargetDate = true;
      rows.push(row);
    } else if (isTargetDate && dateElement && dateElement.textContent.trim().match(/\d{2}-\d{2}-\d{4}/)) {
      break;
    } else if (isTargetDate) {
      rows.push(row);
    }
  }
  return rows;
}

async function fillTimesheet() {
  console.log('🚀 Starting SAFE timesheet fill for week Nov 3–7, 2025...');
  preventSubmission();
  
  let totalProcessed = 0;
  
  for (const [date, entries] of Object.entries(timesheetData)) {
    console.log(`\n📅 Processing ${date} (${entries.length} entries)`);
    try {
      let dateRows = getTimesheetRowsForDate(date);
      if (dateRows.length === 0) {
        console.error(`❌ No rows found for date: ${date}`);
        continue;
      }

      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (i >= dateRows.length) {
          const lastRow = dateRows[dateRows.length - 1];
          const addButton = lastRow.querySelector('.add-row');
          if (addButton) {
            await clickAddButton(addButton);
            dateRows = getTimesheetRowsForDate(date);
          } else continue;
        }

        const currentRow = dateRows[i];
        const hourSelects = currentRow.querySelectorAll('select.toggle-style.time');
        selectDropdownValue(hourSelects[0], formatTimeValue(entry.hours));
        selectDropdownValue(hourSelects[1], formatTimeValue(entry.minutes));

        const taskDropdown = currentRow.querySelector('.major-task select');
        selectDropdownValue(taskDropdown, entry.taskValue);

        const descriptionTextarea = currentRow.querySelector('textarea.form-control');
        fillTextArea(descriptionTextarea, entry.description);
        totalProcessed++;
        await new Promise(resolve => setTimeout(resolve, 600));
      }

      const dayTotal = entries.reduce((sum, e) => sum + e.hours + e.minutes / 60, 0);
      console.log(`✅ ${date} completed (${entries.length} entries, ${dayTotal.toFixed(2)}h)`);
    } catch (err) {
      console.error(`❌ Error on ${date}:`, err);
    }
  }

  console.log(`\n🎉 Completed - ${totalProcessed} entries filled`);
  console.log('🛡️ SAFE MODE ACTIVE: No submission executed');
}

function validateWeekData() {
  let total = 0;
  for (const [date, entries] of Object.entries(timesheetData)) {
    const sum = entries.reduce((s, e) => s + e.hours + e.minutes / 60, 0);
    console.log(`${date}: ${sum.toFixed(2)}h`);
    total += sum;
  }
  console.log(`\n✅ Total week hours: ${total.toFixed(2)}h`);
}
