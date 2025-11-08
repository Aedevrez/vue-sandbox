import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.pending" title="Pending Assignments"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>

            <div class="border border-gray-600 text-black">
                <input placeholder="New assignment..." class="p-2" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </section>
        
    `,

    data() {
        return {
            assignments: [
                { name: "Finish Projects", complete: false, id: 1},
                { name: "Read Chapter 4", complete: false, id: 2},
                { name: "Perform Homework", complete: false, id: 3},
            ]
        }
    },

    computed: {
        filters() {
            return {
                pending: this.assignments.filter(a => ! a.complete),
                completed: this.assignments.filter(a => a.complete)
            };
        }
    }
    
}