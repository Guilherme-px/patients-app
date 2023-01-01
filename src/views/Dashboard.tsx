import styles from '../assets/sass/button.module.sass';

const Dashboard = () => {
    return (
        <main className={styles.container}>
            <div className={styles.button_content}>
                <button className={styles.button_add}>Novo paciente</button>
            </div>
        </main>
    );
};

export default Dashboard;
