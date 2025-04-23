// JavaScript source code
<script>
    function editDonor(id) {
        alert("Edit donor with ID: " + id);
    // redirect to donor edit page or open a modal
  }

    function deleteDonor(id) {
    const confirmDelete = confirm("Are you sure to delete this donor?");
    if (confirmDelete) {
        // logic to delete from backend or UI
        alert("Donor deleted with ID: " + id);
    }
  }
</script>
