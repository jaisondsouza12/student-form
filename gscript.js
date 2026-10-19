function doPost(e) {

    const sheet = SpreadsheetApp
        .getActiveSpreadsheet()
        .getSheetByName("Sheet1");

    sheet.appendRow([
        new Date(),          // Timestamp
        e.parameter.name,    // Name
        e.parameter.email,   // Email
        e.parameter.course,  // Course
        e.parameter.phone,   // Phone
        e.parameter.message  // Message
    ]);

    return ContentService
        .createTextOutput("Form submitted successfully!");
}
