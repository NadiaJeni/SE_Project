// JavaScript source code
<script>
    function editPatient(id) {
        alert("Edit patient with ID: " + id);
    // redirect to patient edit page or open a modal
  }

    function deletePatient(id) {
    const confirmDelete = confirm("Are you sure to delete this patient?");
    if (confirmDelete) {
        alert("Patient deleted with ID: " + id);
    }
  }
</script>
