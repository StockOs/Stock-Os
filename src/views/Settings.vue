<template>
  <section class="account">
    <h1 class="subtitle">Mon compte</h1>
    <hr>
    <div class="account-subscribe-section">
      <h2 class="uppercase-text h2-title">ABONNEMENT ET <br> FACTURATION</h2>
      <div class="account-subscribe-info">
        <div class="account-subscribe-section-firm-name">
          <div>
            <h3 class="h3-title">Nom de l'entreprise:</h3>
            <h4 class="h4-title">PastaPlace</h4>
          </div>
          <a href="#">modifier</a>
        </div>
        <div class="account-subscribe-section-firm-mail">
          <div>
            <h3 class="h3-title">Email de l'entreprise:</h3>
            <h4 class="h4-title">PastaPlace@gmail.com</h4>
          </div>
          <a href="#">modifier</a>
        </div>
        <div class="account-subscribe-section-bankInfo">
          <div>
            <h3 class="h3-title">Information bancaire:</h3>
            <h4 class="h4-title">**** **** **** 9873</h4>
            <p>Prochaine date de facturation: 25 avril 2021</p>
          </div>
          <a href="#">modifier</a>
        </div>
      </div>
    </div>
    <br>
    <hr>
    <div class="account-forfait-section">
      <h2 class="uppercase-text">DETAILS DU FORFAIT</h2>
      <div class="account-forfait-section-info">
        <h3 class="h4-title">Premium</h3>
        <a href="#">Changer de forfait</a>
      </div>
    </div>
    <br>
    <hr>
    <div class="account-actions-section">
      <h2 class="uppercase-text">ACTIONS DU COMPTE</h2>
      <button>Annuler l'abonnement</button>
      <button>Supprimer son compte</button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
  .main-content{
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .account {
    margin-top: 16px;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
  }

  .account >  h1 {
    color: var(--primary-blue);
    margin-bottom: 16px;
  }

  .account > div > h2 {
    color: #a2c3fa;
  }
  .account-subscribe-section {
    display: flex;
    justify-content: space-between;
    height: 50%;
  }

  .account-subscribe-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
  }

  .account-forfait-section,
  .account-subscribe-section-firm-name,
  .account-subscribe-section-firm-mail,
  .account-subscribe-section-bankInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .account-forfait-section,
  .account-actions-section,
  .account-subscribe-section {
    margin-top: 1rem;
  }

  .account-forfait-section-info {
    display: flex;
    justify-content: space-between;
    width: 60%;
  }

  .h2-title {
    line-height: 2rem;
  }

  .h3-title{
    font-weight: 800;
  }

  .h4-title {
    font-weight: 800;
    color: var(--primary-blue);
  }

  a {
    text-decoration: none;
    color: var(--primary-blue);
  }

  hr {
    border-top: 1.5px solid var(--primary-blue);
  }
</style>