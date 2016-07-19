// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Are you smarter than a State Board of Education member?",
        "main":    "<p>The Texas State Board of Education is composed of 15 elected, partisan members -- each representing more than 1.5 million Texans -- who write curriculum standards and approve textbooks for the entire state’s public school system. Certainly, a position of so much power requires candidates who can rise to those standards, right? After taking this quiz, you may not be so sure...</p>",
        "results": "<h2 style='color: red;'>Great job. Now you can help even more.</h2><br /><a id='pledgelink' href='#' >Click here to take the pledge.</a>",
        "level1":  "<span style='color: green;'>Looks like you got a good schoolin' - too good for the SBOE.</span>",
        "level2":  "<span style='color: green;'>Looks like you got a good schoolin' - too good for the SBOE.</span>",
        "level3":  "<span style='color: green;'>Looks like you got a good schoolin' - too good for the SBOE.</span>",
        "level4":  "<span style='color: green;'>Looks like you got a good schoolin' - too good for the SBOE.</span>",
        "level5":  "<span style='color: green;'>Looks like you got a good schoolin' - too good for the SBOE.</span>" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "According to one SBOE member, whom do women have to thank for gaining the right to vote?",
            "a": [
                {"option": "The women’s suffrage movement",      "correct": false},
                {"option": "The Supreme Court",     "correct": false},
                {"option": "Men",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Yup.</span> During a board discussion about civil rights, former SBOE chairman Don McLeroy said, &#34;For instance, the women’s right to vote. The women didn’t vote on it, the men did. The men passed it for the women.&#34;</p>",
            "incorrect": "<p><span>The SBOE disagrees.</span> During a board discussion about civil rights, former SBOE chairman Don McLeroy said, &#34;For instance, the women’s right to vote. The women didn’t vote on it; the men did. The men passed it for the women.&#34;</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Single True Answer
            "q": "According to the SBOE, which of these three factors is the <u>least significant</u> cause of the Civil War?",
            "a": [
                {"option": "Slavery",               "correct": true},
                {"option": "States’ rights",   "correct": false},
                {"option": "Sectionalism",               "correct": false} // no comma here
            ],
            "correct": "<p><span>Yep, you got it: slavery gets third billing in the Civil War.</span> By a deliberate vote of the board, the current social studies curriculum standards list the causes of the Civil War in the following order: sectionalism, states’ rights, and slavery.</p>",
            "incorrect": "<p><span>Nope: slavery ranks last.</span> By a deliberate vote of the board, the current social studies curriculum standards list the causes of the Civil War in the following order: sectionalism, states’ rights, and slavery.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Fill in the blank: Former SBOE chairman Don McLeroy once instructed a panel of curriculum reviewers that infamous red-baiter Joseph McCarthy had been _______ by history.",
            "a": [
                {"option": "Damned",                  "correct": false},
                {"option": "Vindicated",           "correct": true},
                {"option": "Forgotten",  "correct": false} // no comma here
            ],
            "correct": "<p><span>You got it - who could forget those good ol' days of Communist witch-hunts?</span> McLeroy circulated a note to the U.S. History curriculum panel stating: &#34;Read the latest on McCarthy – he was basically vindicated.&#34; How he was vindicated was not detailed by McLeroy.</p>",
            "incorrect": "<p><span>C'mon, who doesn't love exposing Commies?</span> McLeroy circulated a note to the U.S. History curriculum panel stating: &#34;Read the latest on McCarthy – he was basically vindicated.&#34; How he was vindicated was not detailed by McLeroy.</p>" // no comma here
        },
        { // Question 4
            "q": "The new history standards that the board passed in 2010 instruct students that international treaties  _______________.",
            "a": [
                {"option": "Are a necessary part of our increasingly global world.",    "correct": false},
                {"option": "Provide a helpful tool in diplomacy.",     "correct": false},
                {"option": "Undermine U.S. sovereignty.",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Heck yeah - Texas should just secede from the world!</span> In a last minute change to the social studies curriculum standards, the &#34;black helicopter&#34; crowd at the SBOE inserted this paranoid attack on international cooperation: &#34;evaluate efforts by global organizations to undermine U.S. sovereignty through the use of treaties.&#34;</p>",
            "incorrect": "<p><span>Ha, you probably did Model UN.</span> In a last minute change to the social studies curriculum standards, the &#34;black helicopter&#34; crowd at the SBOE inserted this paranoid attack on international cooperation: &#34;evaluate efforts by global organizations to undermine U.S. sovereignty through the use of treaties.&#34;</p>" // no comma here
        },
        { // Question 6
            "q": "Which of these topics are not mentioned at all in Texas' new history curriculum?",
            "a": [
                {"option": "Jim Crow laws",    "correct": false},
                {"option": "Ku Klux Klan",     "correct": false},
                {"option": "Sharecropping",      "correct": false},
                {"option": "All of the above",     "correct": true} // no comma here
            ],
            "correct": "<p><span>You got it - all three are just insignificant footnotes in our flawless, awesome history.</span> Although students must study Jefferson Davis’ speeches, there is no mention of any of these three unsavory topics in post-Civil War U.S. history standards.</p>",
            "incorrect": "<p><span>Well yes, they left that one out, but they left the others out, too.</span> Although students must study Jefferson Davis’ speeches, there is no mention of any of these three unsavory topics in post-Civil War U.S. history standards.</p>" // no comma here
        } // no comma here
    ]
};
