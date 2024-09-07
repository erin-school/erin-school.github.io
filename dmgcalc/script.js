(function () {

  try {
    function calcDmg() {
      const p1 = parseFloat(document.getElementById('attackPower').value || 0);
      const p2 = parseFloat(document.getElementById('attackPowerIncrease').value || 0) / 100;
      const p3 = parseFloat(document.getElementById('defensePower').value || 0);
      const p4 = document.getElementById('isArmorPiercing').checked ? 1 : 0;
      const p5 = parseFloat(document.getElementById('skillMultiplier').value || 100) / 100;
      const p6 = parseInt(document.getElementById('skillHitCount').value || 1);
      const p7 = parseFloat(document.getElementById('attackerDamageIncrease').value || 0) / 100;
      const p8 = parseFloat(document.getElementById('defenderDamageReduction').value || 0) / 100;
      const p9 = parseFloat(document.getElementById('attackerDamageReduction').value || 0) / 100;
      const p10 = parseFloat(document.getElementById('defenderDamageIncrease').value || 0) / 100;
      const p11 = parseFloat(document.getElementById('critDamage').value || 130) / 100;
      const p12 = document.getElementById('isCrit').checked ? 1 : 0;
      const p13 = document.getElementById('isBlock').checked ? 1 : 0;
      const p14 = document.getElementById('isBackAttack').checked ? 1 : 0;

      const p15 = parseFloat(document.getElementById('attributeAdvantage').value / 100);
      const p16 = parseFloat(document.getElementById('positionAdvantage').value / 100);

      const p17 = parseFloat(document.getElementById('attackerHealthStateMultiplier').value / 100);
      const p18 = parseFloat(document.getElementById('defenderHealthStateMultiplier').value / 100);

      const m1 = (1 + p2) * (1 + p15) + p16;

      const m2 = Math.min(Math.max(1 + p7 - p9 + (p14 ? 0.3 : 0) - p17, 0.5) * (1 - p8) *
          (1 - (p13 ? 0.2 : 0)) * (1 + p10) * (1 + p18), 3);

      const bD = (p1 * m1 - p3 * (p4 ? 0.6 : 1)) * m2 * p5;

      const fD = p12 ? bD * p11 : bD;
      const fDFinal = Math.floor(fD) * p6;

      document.getElementById('result').textContent = `예상 피해: ${fDFinal}`;
    }

    document.addEventListener('DOMContentLoaded', () => {
      calcDmg()

      const inputs = document.querySelectorAll('input[type="number"], input[type="checkbox"], select')

      inputs.forEach(input => {
        input.addEventListener('change', () => {
          calcDmg()
        })
      })
    })
  } catch (error) {
    console.error(error)
  }
})();
