(function () {
    try {
      function calculateDamage() {
        const attackPower = parseFloat(document.getElementById('attackPower').value || 0);
        const attackPowerIncrease = parseFloat(document.getElementById('attackPowerIncrease').value || 0) / 100;
        const defensePower = parseFloat(document.getElementById('defensePower').value || 0);
        const isArmorPiercing = document.getElementById('isArmorPiercing').checked ? 1 : 0;
        const skillMultiplier = parseFloat(document.getElementById('skillMultiplier').value || 100) / 100;
        const skillHitCount = parseInt(document.getElementById('skillHitCount').value || 1);
        const attackerDamageIncrease = parseFloat(document.getElementById('attackerDamageIncrease').value || 0) / 100;
        const defenderDamageReduction = parseFloat(document.getElementById('defenderDamageReduction').value || 0) / 100;
        const attackerDamageReduction = parseFloat(document.getElementById('attackerDamageReduction').value || 0) / 100;
        const defenderDamageIncrease = parseFloat(document.getElementById('defenderDamageIncrease').value || 0) / 100;
        const critDamage = parseFloat(document.getElementById('critDamage').value || 130) / 100;
        const isCrit = document.getElementById('isCrit').checked ? 1 : 0;
        const isBlock = document.getElementById('isBlock').checked ? 1 : 0;
        const isBackAttack = document.getElementById('isBackAttack').checked ? 1 : 0;
  
        const attributeAdvantage = parseFloat(document.getElementById('attributeAdvantage').value / 100);
        const positionAdvantage = parseFloat(document.getElementById('positionAdvantage').value / 100);
  
        const attackerHealthStateMultiplier = parseFloat(document.getElementById('attackerHealthStateMultiplier').value / 100);
        const defenderHealthStateMultiplier = parseFloat(document.getElementById('defenderHealthStateMultiplier').value / 100);
  
        const attackPowerMultiplier = (1 + attackPowerIncrease)*(1 + attributeAdvantage) + positionAdvantage;
  
        const baseDamageMultiplier = Math.min(Math.max(1 + attackerDamageIncrease - attackerDamageReduction + (isBackAttack ? .3 : 0) - attackerHealthStateMultiplier, 0.5) * (1 - defenderDamageReduction) *
          (1 - (isBlock ? 0.2 : 0)) * (1 + defenderDamageIncrease) * (1 + defenderHealthStateMultiplier),3);
  
        const baseDamage = (attackPower * attackPowerMultiplier - defensePower * (isArmorPiercing ? 0.6 : 1)) * baseDamageMultiplier * skillMultiplier;
       
        const finalHitDamage = isCrit ? baseDamage * critDamage : baseDamage;
        const finalDamage = Math.floor(finalHitDamage) * skillHitCount;
  
        document.getElementById('result').textContent = `예상 피해: ${finalDamage}`;
      }
  
      document.addEventListener('DOMContentLoaded', () => {
        calculateDamage()
  
        const inputs = document.querySelectorAll('input[type="number"], input[type="checkbox"], select')
  
        inputs.forEach(input => {
          input.addEventListener('change', () => {
            calculateDamage()
          })
        })
      })
    } catch (error) {
      console.error(error)
    }
  })();