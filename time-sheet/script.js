// =================== TIMESHEET AUTOMATION SCRIPT ===================

// Your timesheet data - modify this section with your actual entries
const timesheetData = {
  "24-09-2025": [
    {
      task: "Other", // Maps to option value "288"
      taskValue: "288",
      description: "Shared subscription access details with Anmol and discussed access with team",
      hours: 1,
      minutes: 30
    },
    {
      task: "Other",
      taskValue: "288", 
      description: "Explored App Service Plan pricing and cost implications",
      hours: 2,
      minutes: 30
    }
  ],
  "25-09-2025": [
    {
      task: "Internal Discussion", // Maps to option value "287"
      taskValue: "287",
      description: "Attended sync-up and access-related calls with Manish, Dhruv, and Pankaj",
      hours: 2,
      minutes: 0
    },
    {
      task: "Other",
      taskValue: "288",
      description: "Deployed frontend on App Service using CI/CD and initiated backend deployment",
      hours: 4,
      minutes: 0
    }
  ]
};

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
    return new Promise(resolve => setTimeout(resolve, 800)); // Wait for new row
  }
  return Promise.resolve();
}

function formatTimeValue(value) {
  return value.toString().padStart(2, '0');
}

// Find date row by date string
function findDateRow(dateString) {
  const allDateElements = document.querySelectorAll('.date-val');
  for (let element of allDateElements) {
    if (element.textContent.trim().includes(dateString)) {
      return element.closest('.timesheets-card');
    }
  }
  return null;
}

// Get all timesheet rows for a specific date
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
      // Stop when we hit the next date
      break;
    } else if (isTargetDate) {
      rows.push(row);
    }
  }
  
  return rows;
}

// Main automation function
async function fillTimesheet() {
  console.log('🚀 Starting timesheet automation...');
  
  for (const [date, entries] of Object.entries(timesheetData)) {
    console.log(`📅 Processing date: ${date}`);
    
    try {
      // Get all rows for this date
      let dateRows = getTimesheetRowsForDate(date);
      
      if (dateRows.length === 0) {
        console.error(`❌ No rows found for date: ${date}`);
        continue;
      }
      
      console.log(`✅ Found ${dateRows.length} existing row(s) for ${date}`);
      
      // Process each entry
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        console.log(`  📝 Processing entry ${i + 1}: ${entry.description.substring(0, 50)}...`);
        
        // If we need more rows than exist, add them
        if (i >= dateRows.length) {
          console.log(`  ➕ Adding new row for entry ${i + 1}`);
          const lastRow = dateRows[dateRows.length - 1];
          const addButton = lastRow.querySelector('.add-row');
          
          if (addButton) {
            await clickAddButton(addButton);
            // Refresh the rows list
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
        
        // Fill hours dropdown
        const hourSelects = currentRow.querySelectorAll('select.toggle-style.time');
        const hourDropdown = hourSelects[0]; // First select is hours
        if (hourDropdown) {
          const success = selectDropdownValue(hourDropdown, formatTimeValue(entry.hours));
          console.log(`    ⏰ Hours: ${success ? '✅' : '❌'} ${entry.hours}`);
        }
        
        // Fill minutes dropdown  
        const minuteDropdown = hourSelects[1]; // Second select is minutes
        if (minuteDropdown) {
          const success = selectDropdownValue(minuteDropdown, formatTimeValue(entry.minutes));
          console.log(`    ⏰ Minutes: ${success ? '✅' : '❌'} ${entry.minutes}`);
        }
        
        // Fill task dropdown
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
        
        // Small delay between entries
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      console.log(`✅ Completed ${date} - ${entries.length} entries processed`);
      
    } catch (error) {
      console.error(`❌ Error processing ${date}:`, error);
    }
  }
  
  console.log('🎉 Timesheet automation completed!');
}

// Validation function to check if form is ready
function validateFormReady() {
  const dateElements = document.querySelectorAll('.date-val');
  const hourDropdowns = document.querySelectorAll('select.toggle-style.time');
  const taskDropdowns = document.querySelectorAll('.major-task select');
  
  console.log('📊 Form validation:');
  console.log(`  📅 Date elements: ${dateElements.length}`);
  console.log(`  ⏰ Hour dropdowns: ${hourDropdowns.length}`);
  console.log(`  📋 Task dropdowns: ${taskDropdowns.length}`);
  
  return dateElements.length > 0 && hourDropdowns.length > 0;
}

// Dry run function to test without making changes
function dryRun() {
  console.log('🔍 DRY RUN - Testing element detection...');
  
  for (const [date, entries] of Object.entries(timesheetData)) {
    console.log(`\n📅 Testing date: ${date}`);
    const dateRows = getTimesheetRowsForDate(date);
    console.log(`  Found ${dateRows.length} row(s)`);
    
    if (dateRows.length > 0) {
      const firstRow = dateRows[0];
      console.log('  Elements in first row:');
      console.log(`    ⏰ Hour selects: ${firstRow.querySelectorAll('select.toggle-style.time').length}`);
      console.log(`    📋 Task select: ${firstRow.querySelector('.major-task select') ? '✅' : '❌'}`);
      console.log(`    📄 Description textarea: ${firstRow.querySelector('textarea.form-control') ? '✅' : '❌'}`);
      console.log(`    ➕ Add button: ${firstRow.querySelector('.add-row') ? '✅' : '❌'}`);
    }
  }
}

// =================== EXECUTION COMMANDS ===================
// Copy these commands to browser console:

console.log('📋 TIMESHEET AUTOMATION SCRIPT LOADED');
console.log('Available commands:');
console.log('• validateFormReady() - Check if form is ready');
console.log('• dryRun() - Test element detection without changes');
console.log('• fillTimesheet() - Execute the automation');

// Auto-run validation
validateFormReady();
