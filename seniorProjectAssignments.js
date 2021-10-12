javascript: (function() {
    let sectionId = window.location.href.split('=')[1];
    const q2Date = new Date(2022,0,13);
    const q3Date = new Date(2022,2,25);
    const q4Date = new Date(2022,5,9);
    const skillsCategory = 1666;
    const assignmentsCategory = 1665;
    const assignments = [
        {
            name: 'Contract',
            competency: assignmentsCategory,
            dueDate: q2Date
        },
        {
            name: 'Organization',
            competency: assignmentsCategory,
            dueDate: q2Date
        },
        {
            name: 'Project Commitment',
            competency: assignmentsCategory,
            dueDate: q2Date
        },
        {
            name: 'Q2 Attendance',
            competency: assignmentsCategory,
            dueDate: q2Date
        },
        {
            name: '*Q2 Assignment Summary',
            competency: skillsCategory,
            dueDate: q2Date
        },
        {
            name: 'Project Verification Meeting',
            competency: assignmentsCategory,
            dueDate: q3Date
        },
        {
            name: 'Research',
            competency: assignmentsCategory,
            dueDate: q3Date
        },
        {
            name: 'AOK Progress',
            competency: assignmentsCategory,
            dueDate: q3Date
        },
        {
            name: 'Q3 Attendance',
            competency: assignmentsCategory,
            dueDate: q3Date
        },
        {
            name: 'Q2 Work Done',
            competency: assignmentsCategory,
            dueDate: q3Date
        },
        {
            name: '*Q3 Assignment Summary',
            competency: skillsCategory,
            dueDate: q3Date
        },
        {
            name: 'Practice Presentation',
            competency: assignmentsCategory,
            dueDate: q4Date
        },
        {
            name: 'Presentation',
            competency: assignmentsCategory,
            dueDate: q4Date
        },
        {
            name: 'Q4 Attendance',
            competency: assignmentsCategory,
            dueDate: q4Date
        },
        {
            name: 'Q3 Work Done',
            competency: assignmentsCategory,
            dueDate: q4Date
        },
        {
            name: '*Q4 Assignment Summary',
            competency: skillsCategory,
            dueDate: q4Date
        },
    ];
    const addAssignment = async (assignmentName, dueDateObj, category, sectionId) => {
        const assignmentUrl = 'https://sau25.powerschool.com/ws/xte/section/assignment';
        const payload = {
            'standardcalcdirection': 'NONE',
            'standardscoringmethod': 'GradeScale',
            'yearid': 31,
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
