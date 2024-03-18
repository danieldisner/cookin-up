<template>
    <footer class="footer paragraph">
        Developed by Daniel Disner | Non-commercial project
    </footer>
</template>

<style scoped>
.footer {
    background: var(--dark-green, #263A29);
    padding: 1.5rem 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 1300px) {
    .footer {
        padding: 1.5rem 3.75rem;
    }
}

@media only screen and (max-width: 767px) {
    .footer {
        padding: 1.5rem;
    }
}
</style>