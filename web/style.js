
        // Product Interface
        class Employee {
            getDetails() {}
        }

        // Concrete Products
        class Developer extends Employee {
            constructor(name, salary) {
                super();
                this.name = name;
                this.salary = salary;
            }

            getDetails() {
                return `Developer: ${this.name}, Salary: ${this.salary}`;
            }
        }

        class Manager extends Employee {
            constructor(name, salary) {
                super();
                this.name = name;
                this.salary = salary;
            }

            getDetails() {
                return `Manager: ${this.name}, Salary: ${this.salary}`;
            }
        }

        // Additional Concrete Product
        class Designer extends Employee {
            constructor(name, salary, designSoftware) {
                super();
                this.name = name;
                this.salary = salary;
                this.designSoftware = designSoftware;
            }

            getDetails() {
                return `Designer: ${this.name}, Salary: ${this.salary}, Design Software: ${this.designSoftware}`;
            }
        }

        // Creator Interface
        class EmployeeFactory {
            createEmployee(name, salary) {}
        }

        // Concrete Creators
        class DeveloperFactory extends EmployeeFactory {
            createEmployee(name, salary) {
                return new Developer(name, salary);
            }
        }

        class ManagerFactory extends EmployeeFactory {
            createEmployee(name, salary) {
                return new Manager(name, salary);
            }
        }

        class DesignerFactory extends EmployeeFactory {
            createEmployee(name, salary) {
                return new Designer(name, salary, "Adobe Creative Suite");
            }
        }

        // Client code
        function printEmployeeDetails(factory, name, salary) {
            const employee = factory.createEmployee(name, salary);
            const detailsContainer = document.getElementById('employee-details');
            const detailsElement = document.createElement('div');
            detailsElement.className = 'employee-details';
            detailsElement.textContent = employee.getDetails();
            detailsContainer.appendChild(detailsElement);
        }

        // Example usage
        const developerFactory = new DeveloperFactory();
        const managerFactory = new ManagerFactory();
        const designerFactory = new DesignerFactory();

        printEmployeeDetails(developerFactory, "Alice", 60000);
        printEmployeeDetails(managerFactory, "Bob", 80000);
        printEmployeeDetails(designerFactory, "Eve", 70000);
