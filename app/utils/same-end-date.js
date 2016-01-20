export default function(formValues) {
  let newVals = { ...formValues };

  if (formValues.startDate && formValues.endDate === undefined) {
    newVals.endDate = formValues.startDate;
  }

  return newVals;
}
