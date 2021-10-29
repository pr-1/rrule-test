// run `node index.js` in the terminal

import pkg from 'rrule';
const { RRule, RRuleSet } = pkg;

console.log(`Hello Node.js v${process.versions.node}!`);

// Event from 10 am to 2 pm
let rule1 = new RRule({
  freq: RRule.MINUTELY,
  dtstart: new Date(Date.UTC(2021, 9, 29, 10, 0, 0)),
  until: new Date(Date.UTC(2021, 9, 29, 14, 0, 0)),
  interval: 15,
});
// Event from 2 pm to 5 pm
let rule2 = new RRule({
  freq: RRule.MINUTELY,
  dtstart: new Date(Date.UTC(2021, 9, 29, 14, 0, 0)),
  until: new Date(Date.UTC(2021, 9, 29, 17, 0, 0)),
  interval: 15,
});
// create a ruleset
const rruleSet = new RRuleSet();
// add these rules to set;
rruleSet.rrule(rule1);
rruleSet.rrule(rule2);
// Save rule set string to db and 1to1 relation with dr. table (FOR ID)
console.log(rruleSet.toString());
console.log('/////////////////////');
// Create a rule to exclude from 1pm to 1:30 pm
let rule3 = new RRule({
  freq: RRule.MINUTELY,
  dtstart: new Date(Date.UTC(2021, 9, 29, 13, 0, 0)),
  until: new Date(Date.UTC(2021, 9, 29, 13, 30, 0)),
});

// remove this rule from rule set;
rruleSet.exrule(rule3);
// Update ruleset string to db
console.log(rruleSet.toString());
