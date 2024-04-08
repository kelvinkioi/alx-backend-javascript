export default function createReportObject(employeesList) {
  const report_obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return report_obj;
}
