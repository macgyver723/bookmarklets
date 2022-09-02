javascript: (function() {
    let sectionId = window.location.href.split('=')[1];
    const q1Date = new Date(2022,9,28); // 0 -> Jan
    const q2Date = new Date(2023,0,12);
    const q3Date = new Date(2023,2,24);
    const q4ADate = new Date(2023,4,31);
    const q4BDate = new Date(2023,5,2);
    const skillsCategory = 1666;        // confirm this number each use
    const assignmentsCategory = 1665;   // confirm this number
    const assignments = [
        {
            name: 'Q1.1 Contract',
            competency: assignmentsCategory,
            dueDate: q1Date
        },
        {
            name: 'Q1.2 Organization',
            competency: assignmentsCategory,
            dueDate: q1Date
        },
        {
            name: 'Q1.3 Project Commitment',
            competency: assignmentsCategory,
            dueDate: q1Date
        },
        {
            name: 'Q1.4 Meeting Attendance',
            competency: assignmentsCategory,
            dueDate: q1Date
        },
        {
            name: 'Q1.5 2 Assignment Summary Q1',
            competency: skillsCategory,
            dueDate: q1Date
        },
        {
            name: 'Q2.6 Project Commitment Form',
            competency: assignmentsCategory,
            dueDate: q2Date
        },
        {
            name: 'Q2.7 Research Annotated Bibligraphy',
            competency: assignmentsCategory,
            dueDate: q2Date
        },
        {
            name: 'Q2.8 AOK Planning',
            competency: assignmentsCategory,
            dueDate: q2Date
        },
        {
            name: 'Q2.9 Completed Q1',
            competency: assignmentsCategory,
            dueDate: q2Date
        },
        {
            name: 'Q2.10 Assignment Summary Q2',
            competency: skillsCategory,
            dueDate: q2Date
        },
        {
            name: 'Q3.11 AOK Progress Check',
            competency: assignmentsCategory,
            dueDate: q3Date
        },
        {
            name: 'Q3.12 Promotion Poster',
            competency: assignmentsCategory,
            dueDate: q3Date
        },
        {
            name: 'Q3.13 Title & Special Request Form',
            competency: assignmentsCategory,
            dueDate: q3Date
        },
        {
            name: 'Q3.14 Completed Q2',
            competency: assignmentsCategory,
            dueDate: q3Date
        },
        {
            name: 'Q3.15 Assignment Summary Q3',
            competency: skillsCategory,
            dueDate: q3Date
        },
        {
            name: 'Q4.16 Practice Presentation',
            competency: assignmentsCategory,
            dueDate: q4ADate
        },
        {
            name: 'Q4.17 Invitations',
            competency: assignmentsCategory,
            dueDate: q4ADate
        },
        {
            name: 'Q4.18 Thank You Notes',
            competency: assignmentsCategory,
            dueDate: q4ADate
        },
        {
            name: 'Q4.19 Presentation',
            competency: assignmentsCategory,
            dueDate: q4BDate
        },
        {
            name: 'Q4.20 Completed Q3',
            competency: assignmentsCategory,
            dueDate: q4ADate
        },
        {
            name: 'Q4.21 Assignment Summary Q4',
            competency: skillsCategory,
            dueDate: q4BDate
        },
    ];
    const addAssignment = async (assignmentName, dueDateObj, category, sectionId) => {
        const assignmentUrl = 'https://sau25.powerschool.com/ws/xte/section/assignment';
        const payload = {
            'standardcalcdirection': 'NONE',
            'standardscoringmethod': 'GradeScale',
            'yearid': 32,                               // confirm this with a test post
            '_assignmentsections': [{
            'description': '',
            'extracreditpoints': 0,
            'relatedgradescaleitemdcid': null,
            'iscountedinfinalgrade': category === skillsCategory,
            'isscoringneeded': true,
            'name': `${assignmentName}`,
            'pointspossible': 1,
            'scoreentrypoints': 1,
            'selectedScoreType': {
                'label': 'Points',
                'value': 'POINTS'
            },
            'totalpointvalue': 1,
            'weight': 1,
            'isscorespublish': true,
            'publishoption': 'Immediately',
            'publishdaysbeforedue': 0,
            'selectedOnlineWorkType': {
                'id': 'Assignment',
                'name': 'Learning Assignment',
                'plugin': 'com.powerschool.lms',
                'disabled': false
            },
            'selectedPublishOption': {
                'label': 'Immediately',
                'value': 'Immediately'
            },
            'dueDateObj': `${dueDateObj.toISOString()}`,
            'publishOnSpecificDateObj': `${new Date().toISOString()}`,
            'maxretakeallowed': 0,
            'sectionsdcid': `${sectionId}`, 
            'yearid': 31,
            '_assignmentcategoryassociations': [{
                'teachercategoryid': `${category}`,
                'isprimary': true
            }],
            'scoretype': 'POINTS',
            'duedate': `${dueDateObj.toISOString().slice(0,10)}`,
            'publishonspecificdate': `${new Date().toISOString().slice(0,10)}`
            }],
            '_assignmentstandardassociations': []
        };

        const response = await fetch(assignmentUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json, text/plain, */*'
            },
            body: JSON.stringify(payload)
        });
    };

    assignments.forEach( async a => {
        await addAssignment(a.name, a.dueDate, a.competency, sectionId);
    });

    alert('Refresh for awesomeness');
})();
