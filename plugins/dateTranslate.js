export default defineNuxtPlugin(() => {
  // const newDate = new Date(dateSubmitted);
  return {
    provide: {
      dateTranslate: (dateSubmitted) => {
        const newDate = new Date(dateSubmitted);
        return {
          short: `${newDate.getDate()}/${newDate.getMonth() + 1}/${
            newDate.getFullYear() - 2000
          }`,
          long: newDate.toDateString().split(" ").slice(1).join(" "),
          year: newDate.getFullYear()
        };
      }
    }
  };
});
