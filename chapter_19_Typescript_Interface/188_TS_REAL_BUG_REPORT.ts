
interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[];
}


function logBug(bug: BugReport): void {
    console.log("BUG- Report -> " + bug.id + " [" + bug.severity + "] " + bug.title);
    bug.stepsToReproduce.forEach(function (step: string, i: number) {
        console.log("  " + (i + 1) + ". " + step);
    })
}

logBug({
    id: 1,
    title: "VWO login is not working. ",
    severity: "High",
    "stepsToReproduce": ["Ste1 : open the app.vwo.com", "Step2 :  enter invalid credes", "step3 : verify the error message"]
});

logBug({
    id: 2,
    title: "VWO login is not working with arabic lang ",
    severity: "High",
    "stepsToReproduce": ["Ste1 : open the app.vwo.com", "Step2 :  enter invalid credes", "step3 : verify the error message"]
});

//output: BUG- Report -> 1 [High] VWO login is not working.
//output:   1. Ste1 : open the app.vwo.com
//output:   2. Step2 :  enter invalid credes
//output:   3. step3 : verify the error message
//output: BUG- Report -> 2 [High] VWO login is not working with arabic lang
//output:   1. Ste1 : open the app.vwo.com
//output:   2. Step2 :  enter invalid credes
//output:   3. step3 : verify the error message
