export default function createReportObject(employeesList) {
  const reportObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return reportObj;
}
