import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.pending" title="Pending Assignments"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>

            <assignment-create @add="add"></assignment-create>
        </section>
        
    `,

    data() {
        return {
            assignments: [
                { name: "Finish Projects", complete: false, id: 1},
                { name: "Read Chapter 4", complete: false, id: 2},
                { name: "Perform Homework", complete: false, id: 3},
            ],
        }
    },

    computed: {
        filters() {
            return {
                pending: this.assignments.filter(a => ! a.complete),
                completed: this.assignments.filter(a => a.complete)
            };
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
    
}