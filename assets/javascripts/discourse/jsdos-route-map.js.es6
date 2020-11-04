export default function() {
  this.route("jsdos", function() {
    this.route("actions", function() {
      this.route("show", { path: "/:id" });
    });
  });
};
