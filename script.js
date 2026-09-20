/* =====================================================
   VYADHA GITA
   STRATEGIC LESSONS FROM MAHABHARATA

   Main Character: Arjun
   Story: A journey of responsibility and care
   Total Chapters: 20
   Total Quiz Questions: 20
   ===================================================== */


/* =====================================================
   GLOBAL VARIABLES
   ===================================================== */

let currentScenario = 0;

let currentQuiz = 0;

let quizScore = 0;

let reflectionScore = 0;

let selectedChoice = false;


/* =====================================================
   SCREEN MANAGEMENT
   ===================================================== */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.add("hidden");

    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {

        selectedScreen.classList.remove("hidden");

    }

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =====================================================
   START JOURNEY
   ===================================================== */

function startJourney() {

    currentScenario = 0;

    currentQuiz = 0;

    quizScore = 0;

    reflectionScore = 0;

    selectedChoice = false;

    showScreen("introScreen");

}


/* =====================================================
   START STORY
   ===================================================== */

function startScenarios() {

    currentScenario = 0;

    reflectionScore = 0;

    showScreen("scenarioScreen");

    displayScenario();

}


/* =====================================================
   STORY DATA
   ===================================================== */

const scenarios = [

    {
        chapter: 1,

        title: "The Missed Call",

        text:
        "Arjun is a first-year college student. " +
        "He is preparing for an important assignment. " +
        "His father calls him, but Arjun is busy studying. " +
        "The call ends before he answers.\n\n" +
        "What should Arjun do?",

        choices: [

            {
                text: "Ignore the call and continue studying",

                feedback:
                "Arjun finishes his work, but his father feels disappointed. " +
                "Important family communication can be missed when we never make time.",

                score: 0

            },

            {
                text: "Finish the immediate task and call his father back",

                feedback:
                "Arjun completes his urgent task and calls his father. " +
                "He learns that his father only wanted to speak with him. " +
                "Balancing responsibilities and communication builds trust.",

                score: 2

            },

            {
                text: "Get angry because his father interrupted him",

                feedback:
                "Arjun responds harshly. His father becomes quiet. " +
                "A busy schedule does not require disrespectful communication.",

                score: 0

            }

        ]

    },


    {
        chapter: 2,

        title: "A Quiet Morning",

        text:
        "The next morning, Arjun notices that his mother is doing " +
        "several household tasks while also preparing his breakfast. " +
        "He has an early college class.\n\n" +
        "What can he do?",

        choices: [

            {
                text: "Leave without saying anything",

                feedback:
                "Arjun leaves, but misses an opportunity to acknowledge his mother's effort.",

                score: 0

            },

            {
                text: "Thank her and help with a manageable task",

                feedback:
                "Arjun thanks his mother and helps before leaving. " +
                "Small acts of appreciation can strengthen family relationships.",

                score: 2

            },

            {
                text: "Tell her that household work is not his responsibility",

                feedback:
                "Arjun refuses to help. Sharing appropriate responsibilities can support a healthier family environment.",

                score: 0

            }

        ]

    },


    {
        chapter: 3,

        title: "The College Assignment",

        text:
        "Arjun has an assignment due tomorrow. " +
        "His father asks him to explain how to use a mobile application. " +
        "Arjun feels stressed about the deadline.\n\n" +
        "What is a reasonable response?",

        choices: [

            {
                text: "Explain that he is busy and arrange a suitable time",

                feedback:
                "Arjun communicates his time constraints respectfully and agrees to help later. " +
                "Clear communication can prevent unnecessary conflict.",

                score: 2

            },

            {
                text: "Shout at his father",

                feedback:
                "Arjun's frustration leads to an unpleasant conversation. " +
                "Stress is understandable, but shouting does not solve the problem.",

                score: 0

            },

            {
                text: "Cancel his assignment immediately without discussion",

                feedback:
                "Arjun gives up an important responsibility without considering other options. " +
                "A balanced approach could address both needs.",

                score: 0

            }

        ]

    },


    {
        chapter: 4,

        title: "The Forgotten Medicine Reminder",

        text:
        "Arjun's mother mentions that his father has a scheduled " +
        "medical appointment. Arjun has an important college activity. " +
        "His family asks him to help with a reminder.\n\n" +
        "What should he do?",

        choices: [

            {
                text: "Ignore the request",

                feedback:
                "The family may lose useful support. Arjun should communicate if he cannot help.",

                score: 0

            },

            {
                text: "Discuss the timing and help arrange a reminder",

                feedback:
                "Arjun checks what is needed and helps arrange a reminder. " +
                "For health-related matters, reliable communication and professional advice are important.",

                score: 2

            },

            {
                text: "Change the medication schedule himself",

                feedback:
                "Changing a medication schedule without qualified medical guidance can be unsafe. " +
                "Arjun should help with communication rather than make medical decisions himself.",

                score: 0

            }

        ]

    },


    {
        chapter: 5,

        title: "A Family Conversation",

        text:
        "At dinner, Arjun's father starts sharing a story from his younger days. " +
        "Arjun wants to watch a video on his phone.\n\n" +
        "What could Arjun choose?",

        choices: [

            {
                text: "Put the phone away and listen for a while",

                feedback:
                "Arjun listens and asks questions. " +
                "Spending attentive time together can help family members feel valued.",

                score: 2

            },

            {
                text: "Interrupt repeatedly",

                feedback:
                "The conversation becomes difficult. Listening without unnecessary interruptions can show consideration.",

                score: 0

            },

            {
                text: "Leave immediately without responding",

                feedback:
                "Arjun misses a chance for connection. " +
                "He could explain if he has another urgent responsibility.",

                score: 0

            }

        ]

    },


    {
        chapter: 6,

        title: "The Weekend Plan",

        text:
        "Arjun plans to spend the weekend with his friends. " +
        "His parents would also like to spend some time with him. " +
        "Both plans matter to him.\n\n" +
        "What should he consider?",

        choices: [

            {
                text: "Cancel every plan without discussion",

                feedback:
                "Arjun makes a decision without discussing everyone's needs. " +
                "Open communication helps create practical arrangements.",

                score: 0

            },

            {
                text: "Discuss the plans and arrange time for both",

                feedback:
                "Arjun discusses the weekend and plans shared time with his parents. " +
                "Respecting family relationships does not require abandoning all personal interests.",

                score: 2

            },

            {
                text: "Hide his plans from his parents",

                feedback:
                "Keeping plans secret can create unnecessary distrust. " +
                "Honest communication is a useful way to manage differences.",

                score: 0

            }

        ]

    },


    {
        chapter: 7,

        title: "The Digital Divide",

        text:
        "Arjun's mother wants to learn how to use a video-calling application. " +
        "Arjun knows how to use it but is working on a project.\n\n" +
        "What is a helpful approach?",

        choices: [

            {
                text: "Explain patiently and offer a suitable time to practice",

                feedback:
                "Arjun helps his mother learn at a comfortable pace. " +
                "Patience and clear explanations can make technology easier to use.",

                score: 2

            },

            {
                text: "Say she will never understand technology",

                feedback:
                "Arjun discourages his mother. " +
                "People learn at different speeds, and respectful teaching is more constructive.",

                score: 0

            },

            {
                text: "Take her phone away",

                feedback:
                "Taking away her device does not address her learning goal. " +
                "Guidance and practice may be more useful.",

                score: 0

            }

        ]

    },


    {
        chapter: 8,

        title: "The Unexpected Expense",

        text:
        "Arjun's family is discussing an unexpected household expense. " +
        "Arjun has some savings for personal purchases. " +
        "He is asked to participate in the discussion.\n\n" +
        "What is a responsible action?",

        choices: [

            {
                text: "Discuss the situation and understand the actual need",

                feedback:
                "Arjun listens and learns about the situation before deciding what he can reasonably do. " +
                "Responsible decisions involve understanding needs and available resources.",

                score: 2

            },

            {
                text: "Spend all his savings immediately without discussion",

                feedback:
                "Arjun acts without considering the full situation. " +
                "Financial decisions benefit from planning and communication.",

                score: 0

            },

            {
                text: "Blame his parents for the expense",

                feedback:
                "Blaming others may increase conflict. " +
                "A calm discussion can help the family explore options.",

                score: 0

            }

        ]

    },


    {
        chapter: 9,

        title: "The Festival Invitation",

        text:
        "A local festival is approaching. Arjun's parents want to attend, " +
        "but they are unsure about transportation and timing.\n\n" +
        "What could Arjun do?",

        choices: [

            {
                text: "Ask about their preferences and help plan safely",

                feedback:
                "Arjun discusses transportation, timing and comfort. " +
                "Planning together helps address practical concerns.",

                score: 2

            },

            {
                text: "Make all decisions without asking them",

                feedback:
                "Arjun may overlook their preferences. " +
                "People should be involved in decisions that directly affect them.",

                score: 0

            },

            {
                text: "Tell them they should never go outside",

                feedback:
                "A blanket restriction may ignore individual needs and preferences. " +
                "A safer approach is to discuss realistic arrangements.",

                score: 0

            }

        ]

    },


    {
        chapter: 10,

        title: "The Difficult Discussion",

        text:
        "Arjun's father disagrees with one of his college choices. " +
        "Arjun feels that his independence is being questioned.\n\n" +
        "What is a constructive response?",

        choices: [

            {
                text: "Listen to the concern and explain his own reasons calmly",

                feedback:
                "Arjun listens and explains his perspective. " +
                "Respectful disagreement allows people to share different viewpoints.",

                score: 2

            },

            {
                text: "End the relationship because of the disagreement",

                feedback:
                "Arjun reacts strongly to a difference of opinion. " +
                "A disagreement can sometimes be managed through calm conversation.",

                score: 0

            },

            {
                text: "Pretend to agree while hiding every decision",

                feedback:
                "Avoiding honest communication can create future problems. " +
                "Arjun can explain his decisions while respecting his father's concerns.",

                score: 0

            }

        ]

    },


    {
        chapter: 11,

        title: "A Lesson from the Past",

        text:
        "Arjun's father shares a difficult experience from his working life. " +
        "Arjun initially thinks the story is not relevant to him.\n\n" +
        "What could he do?",

        choices: [

            {
                text: "Listen and ask what he learned from the experience",

                feedback:
                "Arjun learns about his father's experience and perspective. " +
                "Listening can create opportunities for understanding across generations.",

                score: 2

            },

            {
                text: "Dismiss the story as outdated",

                feedback:
                "Arjun misses an opportunity to understand his father's experience. " +
                "Different generations may have useful perspectives to share.",

                score: 0

            },

            {
                text: "Mock the experience",

                feedback:
                "Mocking personal experiences can hurt trust. " +
                "Respectful discussion is more constructive.",

                score: 0

            }

        ]

    },


    {
        chapter: 12,

        title: "The Busy Examination Week",

        text:
        "Arjun's examinations are approaching. " +
        "His mother asks for help organizing a few household tasks. " +
        "Arjun needs time to study.\n\n" +
        "What should he consider?",

        choices: [

            {
                text: "Discuss priorities and agree on a manageable plan",

                feedback:
                "Arjun explains his study schedule and helps plan the tasks. " +
                "Prioritizing and communicating can reduce stress for everyone.",

                score: 2

            },

            {
                text: "Ignore every request",

                feedback:
                "Arjun does not communicate his limitations. " +
                "Explaining his schedule could help find an arrangement.",

                score: 0

            },

            {
                text: "Stop studying completely without considering alternatives",

                feedback:
                "Arjun abandons his academic responsibility without a plan. " +
                "A balanced solution may be possible.",

                score: 0

            }

        ]

    },


    {
        chapter: 13,

        title: "The Health Conversation",

        text:
        "Arjun notices that his father seems tired and says he has been " +
        "experiencing discomfort. Arjun is concerned.\n\n" +
        "What is the most appropriate response?",

        choices: [

            {
                text: "Listen, encourage appropriate medical care and offer support",

                feedback:
                "Arjun listens and encourages his father to seek qualified medical advice. " +
                "Family support can help someone access appropriate care.",

                score: 2

            },

            {
                text: "Diagnose the condition using an online video",

                feedback:
                "Online information cannot replace a professional assessment. " +
                "Arjun should avoid making unsupported medical diagnoses.",

                score: 0

            },

            {
                text: "Ignore the concern because it is not his problem",

                feedback:
                "Arjun misses an opportunity to offer support. " +
                "Listening and helping someone seek care can be useful.",

                score: 0

            }

        ]

    },


    {
        chapter: 14,

        title: "The Family Responsibility",

        text:
        "Arjun's parents ask him to help organize important household documents. " +
        "He is unsure where to start.\n\n" +
        "What is a useful approach?",

        choices: [

            {
                text: "Discuss the task and organize documents carefully",

                feedback:
                "Arjun clarifies the task and helps organize the documents. " +
                "Careful coordination supports household responsibilities.",

                score: 2

            },

            {
                text: "Throw away documents he thinks are old",

                feedback:
                "Discarding documents without checking can create problems. " +
                "Important records should be handled carefully.",

                score: 0

            },

            {
                text: "Refuse without explaining his concerns",

                feedback:
                "Arjun does not explain his difficulties. " +
                "Discussing the task can help identify a manageable way to contribute.",

                score: 0

            }

        ]

    },


    {
        chapter: 15,

        title: "A Moment of Patience",

        text:
        "Arjun's mother asks him to repeat an explanation about an online form. " +
        "He has already explained it once and feels impatient.\n\n" +
        "How can he respond?",

        choices: [

            {
                text: "Explain again using simpler steps or offer to help later",

                feedback:
                "Arjun remains patient and adapts his explanation. " +
                "Clear communication can support learning and mutual respect.",

                score: 2

            },

            {
                text: "Say she is wasting his time",

                feedback:
                "Arjun's words may hurt his mother. " +
                "Patience and respectful communication are more constructive.",

                score: 0

            },

            {
                text: "Complete the form without telling her anything",

                feedback:
                "Arjun may finish the immediate task, but his mother may not learn how to do it herself. " +
                "He could explain the process if she wants to learn.",

                score: 0

            }

        ]

    },


    {
        chapter: 16,

        title: "The Family Budget",

        text:
        "Arjun wants to purchase a new accessory for his gaming setup. " +
        "His family is also planning household expenses.\n\n" +
        "What should he do?",

        choices: [

            {
                text: "Discuss the purchase and consider his available budget",

                feedback:
                "Arjun considers his own needs alongside household priorities. " +
                "Planning can help make responsible spending decisions.",

                score: 2

            },

            {
                text: "Use household money without permission",

                feedback:
                "Using money without permission can damage trust. " +
                "Financial discussions should be clear and respectful.",

                score: 0

            },

            {
                text: "Blame his family for his inability to buy it",

                feedback:
                "Blaming others does not solve the budget issue. " +
                "A calm conversation about priorities is more helpful.",

                score: 0

            }

        ]

    },


    {
        chapter: 17,

        title: "A Shared Decision",

        text:
        "Arjun's parents want to make a change in the home. " +
        "Arjun has a different idea and believes his suggestion is better.\n\n" +
        "What can he do?",

        choices: [

            {
                text: "Share his suggestion and listen to their views",

                feedback:
                "Arjun contributes his idea while respecting other opinions. " +
                "Shared decisions benefit from listening and discussion.",

                score: 2

            },

            {
                text: "Make the change secretly",

                feedback:
                "Making changes without agreement can create conflict. " +
                "Discussing decisions that affect others is important.",

                score: 0

            },

            {
                text: "Refuse to consider any alternative",

                feedback:
                "Arjun closes the discussion. " +
                "Being open to other perspectives can help the family find a practical solution.",

                score: 0

            }

        ]

    },


    {
        chapter: 18,

        title: "The Meaning of Responsibility",

        text:
        "Arjun remembers the story of Dharmavyadha and Kaushika. " +
        "He begins thinking about how knowledge and family responsibilities " +
        "can be connected in everyday life.\n\n" +
        "What insight can he apply?",

        choices: [

            {
                text: "Treat respect and responsibility as part of everyday conduct",

                feedback:
                "Arjun reflects on the connection between knowledge, conduct and responsibility. " +
                "The Vyadha Gita provides a framework for reflecting on these values.",

                score: 2

            },

            {
                text: "Believe that studying alone completes every responsibility",

                feedback:
                "Academic learning is valuable, but it does not remove all other responsibilities. " +
                "Arjun can reflect on how to balance different parts of life.",

                score: 0

            },

            {
                text: "Assume that respect means agreeing with everyone",

                feedback:
                "Respect does not require agreement in every situation. " +
                "People can disagree while communicating with consideration.",

                score: 0

            }

        ]

    },


    {
        chapter: 19,

        title: "Arjun's New Routine",

        text:
        "After reflecting on the past situations, Arjun wants to develop " +
        "a more consistent way of staying connected with his parents. " +
        "He also has studies, friends and personal goals.\n\n" +
        "What is a practical plan?",

        choices: [

            {
                text: "Create a flexible routine for communication and shared responsibilities",

                feedback:
                "Arjun creates a realistic routine that considers his studies and family needs. " +
                "Consistency and flexibility can help maintain relationships.",

                score: 2

            },

            {
                text: "Promise to be available every minute of every day",

                feedback:
                "An unrealistic promise may be difficult to maintain. " +
                "Practical commitments are more sustainable.",

                score: 0

            },

            {
                text: "Stop all personal activities",

                feedback:
                "Arjun does not need to abandon all personal goals. " +
                "A balanced routine can include both family and individual responsibilities.",

                score: 0

            }

        ]

    },


    {
        chapter: 20,

        title: "A Meaningful Conversation",

        text:
        "At the end of the journey, Arjun sits with his parents. " +
        "He shares what he learned from his experiences. " +
        "He understands that care can involve listening, respect, " +
        "practical support and honest communication.\n\n" +
        "What will Arjun carry forward?",

        choices: [

            {
                text: "Continue practicing respect and care through realistic daily actions",

                feedback:
                "Arjun chooses to apply what he learned in everyday life. " +
                "The journey ends with an opportunity for continued reflection and action.",

                score: 2

            },

            {
                text: "Believe that one good conversation solves every problem",

                feedback:
                "One conversation may be meaningful, but relationships often require ongoing communication and effort.",

                score: 0

            },

            {
                text: "Forget everything after completing the story",

                feedback:
                "Arjun misses the opportunity to reflect on how the lessons could influence his actions.",

                score: 0

            }

        ]

    }

];


/* =====================================================
   DISPLAY SCENARIO
   ===================================================== */

function displayScenario() {

    const scenario = scenarios[currentScenario];

    if (!scenario) {

        startQuiz();

        return;

    }

    selectedChoice = false;

    const progressText = document.getElementById("progressText");

    const scenarioTitle = document.getElementById("scenarioTitle");

    const scenarioText = document.getElementById("scenarioText");

    const choicesContainer = document.getElementById("choicesContainer");

    const feedbackBox = document.getElementById("feedbackBox");

    const feedbackText = document.getElementById("feedbackText");


    progressText.textContent =

        `CHAPTER ${scenario.chapter} / ${scenarios.length}`;


    scenarioTitle.textContent = scenario.title;


    scenarioText.textContent = scenario.text;


    choicesContainer.innerHTML = "";


    feedbackBox.classList.add("hidden");


    feedbackText.textContent = "";


    scenario.choices.forEach((choice, index) => {

        const button = document.createElement("button");

        button.className = "choice-button";


        button.textContent =

            `${String.fromCharCode(65 + index)}. ${choice.text}`;


        button.addEventListener("click", () => {

            selectChoice(choice, button);

        });


        choicesContainer.appendChild(button);

    });

}


/* =====================================================
   SELECT CHOICE
   ===================================================== */

function selectChoice(choice, selectedButton) {

    if (selectedChoice) {

        return;

    }

    selectedChoice = true;


    reflectionScore += choice.score;


    const feedbackBox = document.getElementById("feedbackBox");

    const feedbackText = document.getElementById("feedbackText");

    const allButtons = document.querySelectorAll(".choice-button");


    allButtons.forEach(button => {

        button.disabled = true;

    });


    selectedButton.style.borderColor = "#8df0c3";


    selectedButton.style.background =

        "linear-gradient(100deg, rgba(141,240,195,0.20), rgba(255,255,255,0.08))";


    feedbackText.textContent = choice.feedback;


    feedbackBox.classList.remove("hidden");


    feedbackBox.scrollIntoView({

        behavior: "smooth",

        block: "nearest"

    });

}


/* =====================================================
   NEXT SCENARIO
   ===================================================== */

function nextScenario() {

    currentScenario++;


    if (currentScenario >= scenarios.length) {

        startQuiz();

        return;

    }


    displayScenario();

}


/* =====================================================
   QUIZ DATA
   ===================================================== */

const quizQuestions = [

    {
        question:
        "Which Mahabharata episode inspired this project?",

        options: [

            "The Vyadha–Kaushika dialogue",

            "The Kurukshetra battle strategy",

            "The birth of Karna",

            "The dice game"

        ],

        answer: 0,

        explanation:
        "The project is inspired by the Vyadha–Kaushika dialogue, commonly known as the Vyadha Gita."
    },


    {
        question:
        "Which Parva contains the Vyadha–Kaushika dialogue?",

        options: [

            "Adi Parva",

            "Vana Parva",

            "Bhishma Parva",

            "Shanti Parva"

        ],

        answer: 1,

        explanation:
        "The Vyadha–Kaushika dialogue is associated with the Vana Parva."
    },


    {
        question:
        "Who teaches Kaushika in the Vyadha Gita?",

        options: [

            "Arjuna",

            "Bhishma",

            "Dharmavyadha",

            "Duryodhana"

        ],

        answer: 2,

        explanation:
        "Dharmavyadha teaches Kaushika about Dharma and responsibilities."
    },


    {
        question:
        "What is a central theme of this project?",

        options: [

            "Winning a war",

            "Respecting and caring for ageing parents",

            "Building weapons",

            "Learning astronomy"

        ],

        answer: 1,

        explanation:
        "The project focuses on respect, care and responsibility toward ageing parents."
    },


    {
        question:
        "What is the main purpose of the interactive story?",

        options: [

            "Only entertainment",

            "To teach values through choices and reflection",

            "To replace family conversations",

            "To provide medical diagnosis"

        ],

        answer: 1,

        explanation:
        "The story uses situations and choices to encourage reflection on values and responsibilities."
    },


    {
        question:
        "What is a useful way to handle a busy schedule and a family request?",

        options: [

            "Shout at the family member",

            "Ignore every request",

            "Communicate and arrange a suitable time",

            "Cancel all responsibilities"

        ],

        answer: 2,

        explanation:
        "Clear communication and practical planning can help manage different responsibilities."
    },


    {
        question:
        "What can active listening help develop?",

        options: [

            "Understanding",

            "Confusion",

            "Dishonesty",

            "Unnecessary conflict"

        ],

        answer: 0,

        explanation:
        "Active listening can help people understand each other's experiences and concerns."
    },


    {
        question:
        "What is an example of respectful communication?",

        options: [

            "Interrupting constantly",

            "Explaining your view calmly",

            "Insulting others",

            "Ignoring concerns"

        ],

        answer: 1,

        explanation:
        "Calm explanations allow people to express their views respectfully."
    },


    {
        question:
        "What should you do before making a medical decision for another person?",

        options: [

            "Guess the diagnosis",

            "Follow random online advice",

            "Seek appropriate professional guidance",

            "Ignore symptoms"

        ],

        answer: 2,

        explanation:
        "Medical decisions should be guided by qualified healthcare professionals."
    },


    {
        question:
        "Why is sharing manageable household responsibilities useful?",

        options: [

            "It can support cooperation",

            "It eliminates all disagreements",

            "It replaces communication",

            "It guarantees success"

        ],

        answer: 0,

        explanation:
        "Sharing appropriate tasks can support cooperation and reduce the burden on one person."
    },


    {
        question:
        "What does a realistic commitment mean?",

        options: [

            "A promise that cannot be maintained",

            "A practical promise that considers limitations",

            "Avoiding all responsibilities",

            "Agreeing to everything"

        ],

        answer: 1,

        explanation:
        "Realistic commitments consider available time, resources and responsibilities."
    },


    {
        question:
        "Does respecting parents require agreeing with every opinion?",

        options: [

            "Yes, always",

            "No, respectful disagreement is possible",

            "Only during festivals",

            "Only at college"

        ],

        answer: 1,

        explanation:
        "People can disagree while still communicating respectfully."
    },


    {
        question:
        "What can help older family members learn technology?",

        options: [

            "Mocking their questions",

            "Patient explanations and practice",

            "Taking away their devices",

            "Refusing every request"

        ],

        answer: 1,

        explanation:
        "Patient explanations and practice can support learning."
    },


    {
        question:
        "What is an important part of responsible financial decisions?",

        options: [

            "Spending without discussion",

            "Understanding needs and available resources",

            "Blaming others",

            "Hiding expenses"

        ],

        answer: 1,

        explanation:
        "Understanding needs and resources supports responsible financial planning."
    },


    {
        question:
        "What is one benefit of discussing family plans together?",

        options: [

            "Everyone must agree",

            "It can help consider different preferences",

            "It removes all personal choices",

            "It prevents every problem"

        ],

        answer: 1,

        explanation:
        "Discussion helps people understand different preferences and practical needs."
    },


    {
        question:
        "Which action demonstrates attentive care?",

        options: [

            "Listening to concerns",

            "Ignoring communication",

            "Making decisions secretly",

            "Interrupting conversations"

        ],

        answer: 0,

        explanation:
        "Listening to concerns can be a meaningful part of attentive care."
    },


    {
        question:
        "What can a student learn from the story of Dharmavyadha?",

        options: [

            "Knowledge and responsibility can be connected",

            "Only academic marks matter",

            "Family communication is unnecessary",

            "Every disagreement must become a conflict"

        ],

        answer: 0,

        explanation:
        "The project explores how knowledge, Dharma and everyday responsibilities can be connected."
    },


    {
        question:
        "What is a useful way to manage personal goals and family responsibilities?",

        options: [

            "Abandon every personal goal",

            "Ignore family needs",

            "Plan and communicate realistically",

            "Avoid all decisions"

        ],

        answer: 2,

        explanation:
        "Planning and communication can help people balance different responsibilities."
    },


    {
        question:
        "What is the role of feedback in this educational game?",

        options: [

            "To encourage reflection on choices",

            "To guarantee that a person is morally perfect",

            "To replace all real-life decisions",

            "To diagnose behaviour"

        ],

        answer: 0,

        explanation:
        "Feedback encourages reflection. The game does not measure a person's complete character."
    },


    {
        question:
        "What is the overall goal of the Vyadha Gita project?",

        options: [

            "To teach only programming",

            "To encourage reflection on respect, care and responsibility",

            "To replace parents with technology",

            "To create a medical application"

        ],

        answer: 1,

        explanation:
        "The project aims to encourage reflection on respecting, supporting and caring for ageing parents."
    }

];


/* =====================================================
   START QUIZ
   ===================================================== */

function startQuiz() {

    currentQuiz = 0;

    quizScore = 0;

    showScreen("quizScreen");

    displayQuizQuestion();

}


/* =====================================================
   DISPLAY QUIZ QUESTION
   ===================================================== */

function displayQuizQuestion() {

    const questionData = quizQuestions[currentQuiz];


    if (!questionData) {

        showResults();

        return;

    }


    const quizProgress = document.getElementById("quizProgress");

    const quizQuestion = document.getElementById("quizQuestion");

    const quizOptions = document.getElementById("quizOptions");

    const quizFeedback = document.getElementById("quizFeedback");

    const nextQuizButton = document.getElementById("nextQuizButton");


    quizProgress.textContent =

        `QUESTION ${currentQuiz + 1} / ${quizQuestions.length}`;


    quizQuestion.textContent = questionData.question;


    quizOptions.innerHTML = "";


    quizFeedback.textContent = "";


    nextQuizButton.classList.add("hidden");


    questionData.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "choice-button";


        button.textContent =

            `${String.fromCharCode(65 + index)}. ${option}`;


        button.addEventListener("click", () => {

            answerQuiz(index, button);

        });


        quizOptions.appendChild(button);

    });

}


/* =====================================================
   ANSWER QUIZ
   ===================================================== */

function answerQuiz(selectedAnswer, selectedButton) {

    const questionData = quizQuestions[currentQuiz];


    const allButtons = document.querySelectorAll(

        "#quizOptions .choice-button"

    );


    allButtons.forEach(button => {

        button.disabled = true;

    });


    const quizFeedback = document.getElementById("quizFeedback");


    if (selectedAnswer === questionData.answer) {

        quizScore++;


        selectedButton.style.borderColor = "#8df0c3";


        selectedButton.style.background =

            "rgba(141,240,195,0.18)";


        quizFeedback.textContent =

            "✓ Correct! " + questionData.explanation;

    }

    else {

        selectedButton.style.borderColor = "#ff9d9d";


        selectedButton.style.background =

            "rgba(255,100,100,0.16)";


        quizFeedback.textContent =

            "Not quite. " + questionData.explanation;

    }


    const nextQuizButton = document.getElementById("nextQuizButton");


    nextQuizButton.classList.remove("hidden");


    if (currentQuiz === quizQuestions.length - 1) {

        nextQuizButton.textContent = "View Final Results";

    }

    else {

        nextQuizButton.textContent = "Next Question";

    }

}


/* =====================================================
   NEXT QUIZ QUESTION
   ===================================================== */

function nextQuizQuestion() {

    currentQuiz++;


    if (currentQuiz >= quizQuestions.length) {

        showResults();

        return;

    }


    displayQuizQuestion();

}


/* =====================================================
   FINAL RESULTS
   ===================================================== */

function showResults() {

    showScreen("resultScreen");


    const resultScore = document.getElementById("resultScore");


    const resultDescription = document.querySelector(

        "#resultScreen p"

    );


    const maxReflectionScore = scenarios.length * 2;


    const reflectionPercentage = Math.round(

        (reflectionScore / maxReflectionScore) * 100

    );


    const quizPercentage = Math.round(

        (quizScore / quizQuestions.length) * 100

    );


    resultScore.textContent =

        `Quiz Score: ${quizScore} / ${quizQuestions.length}`;


    resultDescription.innerHTML =

        `You completed Arjun's journey!<br><br>` +

        `Reflection Score: ${reflectionScore} / ${maxReflectionScore}` +

        ` (${reflectionPercentage}%)<br>` +

        `Knowledge Quiz: ${quizPercentage}%<br><br>` +

        `Your choices are opportunities for reflection. ` +

        `Respect and care can be practiced through realistic ` +

        `actions and honest communication.`;

}


/* =====================================================
   INITIAL SCREEN
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    showScreen("homeScreen");

});