// Paste the script in console, then run:

// 1. First validate the form is ready
validateFormReady();

// 2. Test element detection (safe - no changes made)
dryRun();

// 3. If tests pass, run the automation
fillTimesheet();



// Available task options from your form:
"286" // Client Meeting
"287" // Internal Discussion  
"288" // Other




// =================== UPDATED TIMESHEET AUTOMATION SCRIPT ===================
// SAFE FILL ONLY - NO SUBMISSION

// const timesheetData = {
//   "22-09-2025": [
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Worked on backend POC deployment with Azure monitor due to lack of required access",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Discussed log requirements with Dhruv and integrated Azure Monitor workspace with live metrics",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Confirmed monitoring setup with Dhruv on a call",
//       hours: 1,
//       minutes: 0
//     }
//   ],
//   "23-09-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Attended CAM project sync-up call",
//       hours: 0,
//       minutes: 30
//     }
//   ],
//   "24-09-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Shared subscription and other rwuired access information with Anmol and discussed with team",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Reviewed App Service Plan costs and deployment readiness of frontend",
//       hours: 1,
//       minutes: 0
//     }
//   ],
//   "25-09-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Attended sync-up and access-related calls with team; received contributor access",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Deployed frontend on Azure App Service via CI/CD and resolved deployment issues",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Initiated backend deployment and validated resource group access",
//       hours: 1,
//       minutes: 30
//     }
//   ],
//   "26-09-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Participated in sync-up call and initiated backend deployment on Azure App Service",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Investigated API response issues; verified backend running locally but inaccessible via service URL",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Coordinated with developers and updated CI/CD pipeline for backend auto-deployments",
//       hours: 3,
//       minutes: 0
//     }
//   ],
//   "27-09-2025": [
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Resolved backend server deployment issue on App Service",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Updated frontend pipeline and instructed developers on necessary changes",
//       hours: 1,
//       minutes: 0
//     }
//   ]
// };



// Safety check - prevent accidental submission
// function preventSubmission() {
//   const submitButtons = document.querySelectorAll('button[class*="primary-btn"], button:contains("Submit")');
//   submitButtons.forEach(btn => {
//     btn.style.backgroundColor = '#ff4444 !important';
//     btn.style.border = '2px solid red !important';
//     btn.title = 'Script active - manual submission required';
//   });
//   console.log('🛡️ Submit buttons highlighted - manual submission required');
// }



// 9th to 11th oct 2025 entries
// const timesheetData = {
//   "06-10-2025": [
//     {
//       task: "CAM Project",
//       taskValue: "288",
//       description: "Attended project sync-up call and noted backend deployment updates.",
//       hours: 0,
//       minutes: 30
//     }
//   ],
//   "09-10-2025": [
//     {
//       task: "CAM Project",
//       taskValue: "288",
//       description: "Attended project sync-up call and discussed recent backend changes.",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "CAM Project",
//       taskValue: "288",
//       description: "Collaborated with developers to fix backend URL issue where frontend was not hitting deployed backend.",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "CAM Project",
//       taskValue: "288",
//       description: "Worked on redirect URL issue in CAM admin portal; coordinated with Manish Sutar for app registration update.",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "CAM Project",
//       taskValue: "288",
//       description: "Updated CI/CD pipeline configuration for CAM portal frontend branch and verified successful run.",
//       hours: 2,
//       minutes: 30
//     }
//   ],
//   "10-10-2025": [
//     {
//       task: "CAM Project",
//       taskValue: "288",
//       description: "Attended project sync-up call and reviewed recent deployment activity.",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "CAM Project",
//       taskValue: "288",
//       description: "Resolved pipeline issue where push to main branch was not triggering the pipeline; validated fix end-to-end.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "CAM Project",
//       taskValue: "288",
//       description: "Coordinated with developers over multiple calls to troubleshoot pipeline and deployment issues.",
//       hours: 4,
//       minutes: 0
//     }
//   ]
// };


// 10th to 11th oct 2025 entries
// const timesheetData = {
//   "07-10-2025": [
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Attended daily stand-up call.",
//       hours: 0,
//       minutes: 30
//     },
//     {
//       task: "L&D Jenkins",
//       taskValue: "288",
//       description: "Integrated Azure DevOps with Jenkins using service connections and service hooks; verified successful trigger of Jenkins pipeline upon code update.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "KT ICICI Project",
//       taskValue: "288",
//       description: "Knowledge transfer session with Suraj Kumar Singh covering project overview and environment setup; created KT documentation for ICICI project.",
//       hours: 1,
//       minutes: 0
//     },
//     {
//       task: "KT ICICI Project",
//       taskValue: "288",
//       description: "Session with Manish sir and DevOps team regarding project handover and future responsibilities.",
//       hours: 1,
//       minutes: 0
//     }
//   ],
//   "08-10-2025": [
//      {
//       task: "Other",
//       taskValue: "288",
//       description: "Attended daily stand-up call (30 min) and CAM project sync-up call (10 min).",
//       hours: 0,
//       minutes: 40
//     },
//     {
//       task: "L&D Jenkins",
//       taskValue: "288",
//       description: "Prepared and shared CAM KT document with Rishav Raj and DevOps team; added detailed CI/CD and DevOps process documentation to OneNote template.",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "KT ICICI Project",
//       taskValue: "288",
//       description: "Knowledge transfer session with Suraj Kumar Singh (30 min) and follow-up discussion about ICICI project setup and documentation.",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "L&D GitHub Actions",
//       taskValue: "288",
//       description: "Explored GitHub Actions concepts — workflows, marketplace, and GitHub runners; implemented sample workflow for hands-on understanding.",
//       hours: 1,
//       minutes: 30
//     },
   
//   ]
// };





// 13th to 17 oct 2025 entries
// const timesheetData = {
//   "13-10-2025": [
//       {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "DevOps team stand up call",
//       hours: 0,
//       minutes: 30
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "HDFC KT session with Ruchi to understand access process, CyberArk & ServiceNow walkthrough",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Documented learnings, prepared BGV form and coordinated with HR for document verification",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Attended late-night OS patch meeting with HDFC team and performed pre/post checks",
//       hours: 2,
//       minutes: 0
//     },
//   ],

//   "14-10-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "DevOps team stand up call",
//       hours: 0,
//       minutes: 30
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Attended HDFC KT with Ruchi, discussed URL whitelisting and ServiceNow requests",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Documented whitelisting process, filled BGV form, and investigated Terraform service account issue",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Discussion with Kenneth, Aniruddha, Anshul, and Ruchi; prepared for call with Sahithya",
//       hours: 2,
//       minutes: 0
//     },

//   ],

//   "15-10-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "DevOps team stand up call",
//       hours: 0,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Setup of Private GKE cluster on GCP with VPC, Subnet, Cloud NAT and service account configuration",
//       hours: 3,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Troubleshooting cluster deployment failures, verified permissions and redeployed successfully",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Prepared for call with Sahithya",
//       hours: 1,
//       minutes: 0
//     },
//   ],

//   "16-10-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 35
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "HDFC KT session on CR (change) flow for prod environment, OS baseline, and troubleshooting call",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Attended InTrade Prod patch meeting, performed health checks and evidence collection",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Whitelisting troubleshooting call with Web Security team and L1/L2 handover discussion with Ruchi",
//       hours: 2,
//       minutes: 0
//     },
//   ],

//   "17-10-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 35
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "HDFC KT session and discussions on SFTP setup between Vendor and HDFC teams",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Uploaded docker images to UAT server, created CyberArk access, SSH login and manual image deployment",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Installed Helm from tar file, registered ISAC user, and updated HDFC KT documentation",
//       hours: 2,
//       minutes: 0
//     },
//   ]
// }


// 20th to 24th oct 2025 entries
// const timesheetData = {
//   "21-10-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 40
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Provisioning the Private GKE cluster using terraform; Deployed VPC, NAT router and firewall rules",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Faced issues provisioning the Private GKE cluster, solved the issue and redeployed successfully",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Faced an issue while provisioning the node pool; troubleshot and worked on resolving it",
//       hours: 2,
//       minutes: 20
//     },
    
//   ],

//   "22-10-2025": [
//      {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 35
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Provisioned Private GKE cluster using Terraform; tried resolving node pool issues",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Created VPC, subnet, NAT, router, firewall rule and deployed Bastion VM for access - Google console UI",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Accessed and tested the connectivity of private cluster via Bastion VM; deployed frontend app with NodePort service",
//       hours: 2,
//       minutes: 25
//     },
   
//   ],

//   "23-10-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Optional leave – Bhai Dhuj",
//       hours: 0,
//       minutes: 0
//     }
//   ],

//   "24-10-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 40
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "HDFC KT session and VDI setup discussion with Ruchi following shared documentation",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Installed VMware Horizon Client, and set up VDI access",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised URL whitelisting and CyberArk requests via ServiceNow; updated KT documentation",
//       hours: 2,
//       minutes: 0
//     },
    
//   ]
// }

// 27th to 31st oct 2025 entries
// const timesheetData = {
//   "27-10-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Continued HDFC KT session and validated access to Jenkins, GitHub, GCP, Sonar, and Terraform",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised GitHub access request and verified CyberArk and GCP accessibility",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Resolved VDI access issues and updated vendor staff expiry in ISAC portal",
//       hours: 2,
//       minutes: 50
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 40
//     }
//   ],

//   "28-10-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "HDFC KT session; explored ISAC portal functionalities like ADID, email, and password updates",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Coordinated with DevOps and AD team to resolve Terraform access issues",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Assisted Eric with VDI access and location update; explored OS patching documentation",
//       hours: 2,
//       minutes: 15
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 45
//     }
//   ],

//   "29-10-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "HDFC KT session and raised iSAC request to unlock a user ID",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised and followed up on multiple ServiceNow requests; resolved UAT DB access issues via CyberArk",
//       hours: 3,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Rescheduled DB and OS patching for UAT InTrade servers and validated connection post-update",
//       hours: 1,
//       minutes: 45
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Stand up call",
//       hours: 0,
//       minutes: 45
//     }
//   ],

//   "30-10-2025": [
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "HDFC KT session and follow-up of pending requests via email and ServiceNow portal",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Explored CI/CD of CEP project; manually triggered pipelines",
//       hours: 2,
//       minutes: 30
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Worked on InTrade deployment handover to L1/L2 team; explored GreenZone and SPOC patch documentation",
//       hours: 3,
//       minutes: 0
//     }
//   ],

//   "31-10-2025": [
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Raised ISAC requests to manage GitHubLicense group and updated L1/L2 handover tracker",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Scheduled DB patching call and coordinated SPOC for pre/post health check validation",
//       hours: 2,
//       minutes: 0
//     },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Performed DB pre/post health checks with vendor team; resolved Oracle DB connectivity via CyberArk",
//       hours: 3,
//       minutes: 20
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Daily stand up call",
//       hours: 0,
//       minutes: 40
//     }
//   ]
// }

// const timesheetData = {
//   "03-11-2025": [
//     {
//   task: "Other",
//   taskValue: "288",
//   description: "Raised multiple CRs for Python script execution and baseline point implementation",
//   hours: 1,
//   minutes: 30
//   },
//   {
//     task: "Other",
//     taskValue: "288",
//     description: "Validated DB patching and shared sign-off",
//     hours: 1,
//     minutes: 30
//   },
//     {
//       task: "Other",
//       taskValue: "288",
//       description: "Scheduled OS patching meeting; performed pre and post health checks and coordinated with patching team",
//       hours: 4,
//       minutes: 0
//     },
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
//       description: "Stand up call",
//       hours: 0,
//       minutes: 30
//     },
//     {
//       task: "Internal Discussion",
//       taskValue: "287",
//       description: "Call with InTrade teams for CR impelemtation and veried the app was working fine after CR implementation",
//       hours: 2,
//       minutes: 0
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
//       description: "Raised ServiceNow request for DB sync; collected data from Prod DB with Shubham; Helped Akshay wiht Pass reset issues",
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
//       minutes: 35
//     }
//   ]
// }



const timesheetData = {
  "10-11-2025": [
    {
      task: "Internal Discussion",
      taskValue: "287",
      description: "Call with Abhishek from BSG; discussion with Ananditha and Shubham for script testing; discussion with Eric and Sai on GKE deployment; call with DevOps support regarding GitHub access",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Created excel with latest CEP updates and shared with Sahithya and Abhishek; raised iSAC request to unlock user ID",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Went to HDFC branch for laptop setup",
      hours: 3,
      minutes: 0
    }
    // No stand-up call
  ],

  "11-11-2025": [
    {
      task: "Internal Discussion",
      taskValue: "287",
      description: "Connected with Akshay and Sahithya for ID unlock and VDI issue; calls with Shubham for start/stop script; call with Ajit for data sync activity",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Visited HDFC branch IT team for laptop setup, domain setup, formatting, asset mapping",
      hours: 4,
      minutes: 0
    },
    {
      task: "Internal Discussion",
      taskValue: "287",
      description: "Stand-up call",
      hours: 0,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Faced issue accessing VDI and worked on resolution",
      hours: 0,
      minutes: 30
    }
  ],

  "12-11-2025": [
    {
      task: "Other",
      taskValue: "288",
      description: "Visited HDFC branch for laptop setup and policy update",
      hours: 4,
      minutes: 0
    },
    {
      task: "Internal Discussion",
      taskValue: "287",
      description: "Call with Shubham regarding closing of CR; connected with Govinda; closed python script CR",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised multiple whitelisting requests; raised CyberArk access request; updated CEP excel sheet",
      hours: 1,
      minutes: 20
    },
    {
      task: "Internal Discussion",
      taskValue: "287",
      description: "Stand-up call",
      hours: 0,
      minutes: 40
    }
  ],

  "13-11-2025": [
    {
      task: "Internal Discussion",
      taskValue: "287",
      description: "Discussion with Sahithya about L1 L2 handover; call with Ajit regarding password encryption update; discussion with DevOps support on GitHub license; call with Govinda to close CR",
      hours: 3,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Updated tracker; raised network firewall request for prod env; resolved Prod Quest DB disk issue with Ajit; tried resolving Zscaler issue",
      hours: 4,
      minutes: 20
    },
    {
      task: "Internal Discussion",
      taskValue: "287",
      description: "Stand-up call",
      hours: 0,
      minutes: 40
    }
  ],

  "14-11-2025": [
    {
      task: "Internal Discussion",
      taskValue: "287",
      description: "Zscaler issue resolution with FM team; visited HDFC branch for LAN connectivity; resolved Teams access issue; verified URLs are accessible on personal WiFi",
      hours: 4,
      minutes: 0
    },
    {
      task: "Internal Discussion",
      taskValue: "287",
      description: "Connected with Shubham (InTrade team), and performed the pre/post health checks and start/stop activity for DB pathc",
      hours: 2,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Raised ServiceNow requests for SFTP issue, CyberArk access ",
      hours: 1,
      minutes: 30
    }
    // Stand-up call 0 min — not added
  ]
};



function preventSubmission() {
  // Select all buttons
  const allButtons = document.querySelectorAll('button');

  allButtons.forEach(btn => {
    const btnText = btn.textContent.trim().toLowerCase();

    // Match buttons with "submit" or common submit-related text
    if (btn.className.includes('primary-btn') || btnText.includes('submit')) {
      btn.style.backgroundColor = '#ff4444';
      btn.style.border = '2px solid red';
      btn.title = 'Script active - manual submission required';
    }
  });

  console.log('🛡️ Submit buttons highlighted - manual submission required');
}


// Utility functions
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
    textarea.value = text;
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    textarea.dispatchEvent(new Event('change', { bubbles: true }));
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

// Main automation function - SAFE FILL ONLY
async function fillTimesheet() {
  console.log('🚀 Starting SAFE timesheet fill for week Sep 22-27, 2025...');
  console.log('📊 Total entries to process: 15 entries across 6 days');
  
  // Apply safety measures
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
      
      console.log(`✅ Found ${dateRows.length} existing row(s) for ${date}`);
      
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        console.log(`  📝 Entry ${i + 1}/${entries.length}: ${entry.description.substring(0, 40)}...`);
        
        // Add new row if needed
        if (i >= dateRows.length) {
          console.log(`  ➕ Adding new row for entry ${i + 1}`);
          const lastRow = dateRows[dateRows.length - 1];
          const addButton = lastRow.querySelector('.add-row');
          
          if (addButton) {
            await clickAddButton(addButton);
            dateRows = getTimesheetRowsForDate(date);
          } else {
            console.error(`  ❌ Add button not found for date: ${date}`);
            continue;
          }
        }
        
        const currentRow = dateRows[i];
        if (!currentRow) {
          console.error(`  ❌ Row ${i + 1} not found for date: ${date}`);
          continue;
        }
        
        // Fill hours and minutes
        const hourSelects = currentRow.querySelectorAll('select.toggle-style.time');
        const hourDropdown = hourSelects[0];
        if (hourDropdown) {
          const success = selectDropdownValue(hourDropdown, formatTimeValue(entry.hours));
          console.log(`    ⏰ Hours: ${success ? '✅' : '❌'} ${entry.hours}h ${entry.minutes}m`);
        }
        
        const minuteDropdown = hourSelects[1];
        if (minuteDropdown) {
          selectDropdownValue(minuteDropdown, formatTimeValue(entry.minutes));
        }
        
        // Fill task
        const taskDropdown = currentRow.querySelector('.major-task select');
        if (taskDropdown && entry.taskValue) {
          const success = selectDropdownValue(taskDropdown, entry.taskValue);
          console.log(`    📋 Task: ${success ? '✅' : '❌'} ${entry.task}`);
        }
        
        // Fill description
        const descriptionTextarea = currentRow.querySelector('textarea.form-control');
        if (descriptionTextarea) {
          const success = fillTextArea(descriptionTextarea, entry.description);
          console.log(`    📄 Description: ${success ? '✅' : '❌'}`);
        }
        
        totalProcessed++;
        await new Promise(resolve => setTimeout(resolve, 600));
      }
      
      // Calculate day total
      const dayTotal = entries.reduce((sum, entry) => sum + entry.hours + (entry.minutes / 60), 0);
      console.log(`✅ ${date} completed - ${entries.length} entries (${dayTotal}h total)`);
      
    } catch (error) {
      console.error(`❌ Error processing ${date}:`, error);
    }
  }
  
  console.log('\n🎉 TIMESHEET FILLING COMPLETED!');
  console.log(`📊 Total entries processed: ${totalProcessed}/15`);
  console.log('🛡️ NO SUBMISSION OCCURRED - Review and submit manually');
  console.log('\n📋 Week Summary:');
  console.log('  Sep 22 (Mon): 4.0h - Backend POC & Monitoring setup');
  console.log('  Sep 23 (Tue): 0.5h - Sync-up call');
  console.log('  Sep 24 (Wed): 2.0h - Access sharing & cost review');
  console.log('  Sep 25 (Thu): 6.0h - Frontend deployment & backend init');
  console.log('  Sep 26 (Fri): 7.5h - Backend issues & CI/CD updates');
  console.log('  Sep 27 (Sat): 2.0h - Deployment fixes & pipeline updates');
  console.log('  📊 Week Total: 22.0 hours');
}

// Enhanced validation
function validateWeekData() {
  console.log('📊 WEEK DATA VALIDATION:');
  
  let totalHours = 0;
  let totalEntries = 0;
  
  for (const [date, entries] of Object.entries(timesheetData)) {
    const dayHours = entries.reduce((sum, entry) => sum + entry.hours + (entry.minutes / 60), 0);
    totalHours += dayHours;
    totalEntries += entries.length;
    console.log(`  ${date}: ${entries.length} entries, ${dayHours}h`);
  }
  
  console.log(`\n✅ Total: ${totalEntries} entries, ${totalHours} hours`);
  console.log('🛡️ SAFE TO RUN - No submission functionality');
  return true;
}



// =================== EXECUTION COMMANDS ===================
console.log('📅 WEEKLY TIMESHEET AUTOMATION (Sep 22-27, 2025)');
console.log('🛡️ SAFE FILL ONLY - NO AUTOMATIC SUBMISSION');
console.log('\nCommands:');
console.log('• validateWeekData() - Review week summary');
console.log('• fillTimesheet() - Fill all entries (safe)');
console.log('\n⚠️  IMPORTANT: You must manually click "Submit for Approval" after reviewing');

// Auto-validate
validateWeekData();
