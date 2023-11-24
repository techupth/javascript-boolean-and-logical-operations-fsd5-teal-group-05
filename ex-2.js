// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasNotBoughtProductFromITCategory;
let hasNotAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

lastMonthPaidMoreThan4000 = true;
isWeekday = true;
hasNotBoughtProductFromITCategory = true;
hasNotAttendedDiscountEvent = false;

isPlatinum = false;
hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    hasNotBoughtProductFromITCategory &&
    hasNotAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
