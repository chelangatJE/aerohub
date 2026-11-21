const CATALOG = {
    1: { 
        title: "Engineering Foundations", 
        semesters: {
            1: [
                ["EAE 2101", "Introduction to Aerospace Engineering"],
                ["EMG 2102", "Engineering Drawing I"],
                ["SMA 2170", "Algebra"],
                ["SMA 2172", "Calculus I"],
                ["SMA 2177", "Applied Geometry"],
                ["SCH 2120", "Physical and Inorganic Chemistry"],
                ["SPH 2173", "Physics for Engineers I"],
                ["HRD 2101", "Communication Skills"],
                ["SZL 2111", "HIV/AIDS"]
            ],
            2: [
                ["EAE 2103", "Introduction to Computer Systems"],
                ["EMG 2103", "Workshop Processes & Practice I"],
                ["EMG 2104", "Introduction to Materials Science"],
                ["EMG 2105", "Engineering Drawing II"],
                ["SMA 2173", "Calculus II"],
                ["SCH 2121", "Organic Chemistry for Engineers"],
                ["SPH 2174", "Physics for Engineers II"],
                ["HRD 2102", "Development Studies"]
            ]
        }
    },
    2: { 
        title: "Core Engineering Studies", 
        semesters: {
            1: [
                ["EAE 2201", "Aerospace Materials"],
                ["EAE 2202", "Aerodynamics I"],
                ["EAE 2203", "Programming for Engineers I"],
                ["EMG 2202", "Workshop Processes & Practice II"],
                ["EMG 2203", "Engineering Mechanics - Statics"],
                ["EMG 2204", "Computer Aided Drawing"],
                ["SMA 2277", "Calculus III"],
                ["SMA 2278", "Differential Equations"]
            ],
            2: [
                ["EAE 2204", "Aerodynamics II"],
                ["EAE 2205", "Introduction to Aircraft Performance Analysis"],
                ["EAE 2206", "Programming for Engineers II"],
                ["EMG 2206", "Engineering Thermodynamics I"],
                ["EMG 2207", "Engineering Mechanics - Dynamics"],
                ["SMA 2370", "Calculus IV"],
                ["EEE 2230", "Electrical Circuit Analysis"],
                ["SMA 2279", "Linear and Boolean Algebra"],
                ["EAE 2210", "Practical Attachment I (8 Weeks)"]
            ]
        }
    },
    3: { 
        title: "Advanced Aerospace Studies", 
        semesters: {
            1: [
                ["EAE 2301", "Aerodynamics III"],
                ["EAE 2303", "Applied Thermodynamics for Aerospace Engineers"],
                ["EAE 2305", "Space Engineering and Technology I"],
                ["EAE 2307", "Solid and Structural Mechanics"],
                ["EAE 2311", "Composite Materials"],
                ["EMG 2306", "Introduction to Engineering Design"],
                ["EEE 2331", "Electronics"],
                ["HRD 2401", "Entrepreneurship Skills"]
            ],
            2: [
                ["EAE 2302", "Flight Dynamics I"],
                ["EAE 2304", "Production Technology I"],
                ["EAE 2308", "Principles of Aircraft Design"],
                ["EAE 2309", "Aircraft Instruments"],
                ["EMG 2208", "Mechanics of Machines I"],
                ["EMT 2339", "Control Systems"],
                ["EEE 2430", "Microprocessors"],
                ["SMA 2371", "Partial Differential Equations"],
                ["EAE 2320", "Practical Attachment II (8 Weeks)"]
            ]
        }
    },
    4: { 
        title: "Specialisation and Design", 
        semesters: {
            1: [
                ["EAE 2401", "Automatic Control Systems"],
                ["EAE 2402", "Aircraft Structures I"],
                ["EAE 2403", "Vibrations in Aerospace Structures"],
                ["EAE 2404", "Aircraft Systems I"],
                ["EAE 2405", "Flight Dynamics II"],
                ["EAE 2406", "Production Technology II"],
                ["EAE 2414", "Aircraft Propulsion Systems"],
                ["EAE 2416", "Airframe Maintenance (Elective)"],
                ["EAE 2417", "Flight Performance Testing (Elective)"],
                ["EAE 2420", "Aircraft Electrical Systems"],
                ["EAE 2409", "Space Engineering and Technology II"]
            ],
            2: [
                ["EAE 2408", "Maintenance and Reliability Engineering"],
                ["EAE 2410", "Aircraft Systems II"],
                ["EAE 2412", "Aircraft Design"],
                ["EAE 2413", "Aircraft Structures II"],
                ["EMG 2414", "Numerical Methods For Engineers"],
                ["EAE 2415", "Research Methodology and Proposal Writing"],
                ["EAE 2407", "Production Technology III (Elective)"],
                ["EAE 2418", "Aero Engine Maintenance (Elective)"],
                ["EAE 2423", "Simulation, Verification and Validation"],
                ["EAE 2430", "Practical Attachment III (8 Weeks)"]
            ]
        }
    }
};

function selectYear(year) {
    const title = document.getElementById("year-title");
    const description = document.getElementById("year-description");
    const semesters = document.getElementById("semester-options");

    title.textContent = "Year " + year + " Resources";
    description.textContent = "Choose a semester to explore curriculum materials.";

    semesters.innerHTML = `
        <button class="semester-btn" onclick="selectSemester(${year}, 1)">Semester 1 →</button>
        <button class="semester-btn" onclick="selectSemester(${year}, 2)">Semester 2 →</button>
    `;

    document.getElementById("resources").scrollIntoView({ behavior: "smooth" });
}

function selectSemester(year, semester) {
    const semesters = document.getElementById("semester-options");
    const unitList = CATALOG[year].semesters[semester];

    let unitsHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h3 style="font-size: 1.2rem; color: #0f172a; margin: 0;">Year ${year} - Semester ${semester} Units</h3>
            <button onclick="selectYear(${year})" style="padding: 6px 12px; background: #e2e8f0; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85rem;">← Back to Semesters</button>
        </div>
        <div class="unit-grid">
    `;

    unitList.forEach(([code, title]) => {
        unitsHTML += `
            <div class="unit-card" id="card-${code.replace(/\s+/g, '')}">
                <div>
                    <span style="font-size: 0.75rem; font-weight: 700; color: #2563eb; background: #eff6ff; padding: 2px 8px; border-radius: 4px;">${code}</span>
                    <h4 style="margin: 8px 0 6px 0; font-size: 0.95rem; color: #0f172a;">${title}</h4>
                    <p style="font-size: 0.75rem; color: #64748b; margin-bottom: 10px;">Select resource category:</p>
                </div>
                <div class="resource-btn-group">
                    <button class="resource-opt-btn" onclick="showCohortSelector('${code}', 'Notes', '${year}', '${semester}')">Notes</button>
                    <button class="resource-opt-btn" onclick="showCohortSelector('${code}', 'Papers', '${year}', '${semester}')">Papers</button>
                    <button class="resource-opt-btn" onclick="showCohortSelector('${code}', 'Labs', '${year}', '${semester}')">Labs</button>
                </div>
            </div>
        `;
    });

    unitsHTML += `</div>`;
    semesters.innerHTML = unitsHTML;
}

// Shows cohort selection options right inside the card after clicking Notes, Papers, or Labs
function showCohortSelector(code, type, year, semester) {
    const cardId = `card-${code.replace(/\s+/g, '')}`;
    const cardElement = document.getElementById(cardId);

    cardElement.innerHTML = `
        <div>
            <span style="font-size: 0.75rem; font-weight: 700; color: #2563eb; background: #eff6ff; padding: 2px 8px; border-radius: 4px;">${code}</span>
            <h4 style="margin: 6px 0 4px 0; font-size: 0.9rem; color: #0f172a;">${type} Archives</h4>
            <p style="font-size: 0.75rem; color: #64748b; margin-bottom: 8px;">Select Cohort to compare & revise:</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 6px;">
            <button style="padding: 5px; background: #2563eb; color: #fff; border: none; border-radius: 4px; font-size: 0.75rem; cursor: pointer;" onclick="openCohortResource('${code}', '${type}', '2028')">Class of 2028</button>
            <button style="padding: 5px; background: #2563eb; color: #fff; border: none; border-radius: 4px; font-size: 0.75rem; cursor: pointer;" onclick="openCohortResource('${code}', '${type}', '2029')">Class of 2029</button>
            <button style="padding: 5px; background: #2563eb; color: #fff; border: none; border-radius: 4px; font-size: 0.75rem; cursor: pointer;" onclick="openCohortResource('${code}', '${type}', '2030')">Class of 2030</button>
            <button style="padding: 4px; background: #e2e8f0; color: #334155; border: none; border-radius: 4px; font-size: 0.7rem; cursor: pointer; margin-top: 4px;" onclick="selectSemester(${year}, ${semester})">← Back</button>
        </div>
    `;
}

function openCohortResource(code, type, cohortYear) {
    const cleanCode = code.replace(/\s+/g, '');
    let cleanType = type.toLowerCase();
    if (cleanType === 'past papers') {
        cleanType = 'papers';
    }

    const filePath = `documents/${cleanCode}_${cleanType}_${cohortYear}.pdf`;

    const pdfWindow = window.open(filePath, '_blank');
    if (!pdfWindow) {
        alert(`Please allow pop-ups to view Class of ${cohortYear} ${code} ${type}.`);
    }
}

// Student Login Modal Controls
function openLoginModal() {
    document.getElementById("login-modal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("login-modal").style.display = "none";
}

function handleLogin(event) {
    event.preventDefault();
    const regNum = document.getElementById("login-user").value;
    
    // Update navigation bar to show active student session
    const navContainer = document.getElementById("auth-nav-container");
    navContainer.innerHTML = `
        <span style="font-size: 0.85rem; color: #38bdf8; font-weight: 600; padding: 6px 12px; background: rgba(56, 189, 248, 0.1); border-radius: 6px; border: 1px solid rgba(56, 189, 248, 0.2);">
            👤 ${regNum}
        </span>
    `;

    closeLoginModal();
}