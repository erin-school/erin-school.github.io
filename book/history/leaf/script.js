

var theater = theaterJS({ erase: 450})

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'tell1') {
      document.body.classList.add('dark')
    } else {
     document.body.classList.add('dark')
    }
  })

theater
  .addActor('tell1', { speed: 0.8,accuracy: 1 })
      .addScene('tell1:발단.', 850)
    .addScene('tell1:마라 소프의 주도하에 지류를 벗어난 각성자들은 소행성대에 자신들의 왕국을 만들었고 이들의 존재는 태양계에 알려지지 않았었다.', 850)
    .addScene('tell1:몇몇 각성자들은 인류와 함께하기 위해 이탈하기도 했고 소행성대의 험한 환경 때문에 ', 850)
    .addScene('tell1:사고도 많이 일어났지만 마라와 울드렌의 노력으로 정착에 성공한다.', 850)
    .addScene('tell1:어느 날 첩보대장인 울드렌 소프가 몰락자들 사이에서 유래 없는 수준의 통신량을 보고 무언가가 벌어지고 있다는 사실을 알게된다.', 850)
    .addScene('tell1:비록 이들의 암호화된 통신을 뚫을 순 없었지만 ', 850)
    .addScene('tell1:테키언들의 예지 능력으로 몰락자 가문들이 연합해 도시를 공격하려고 한다는 사실을 알게 된다.', 850)
    .addScene('tell1:몰락자 가문인 왕의 가문은 비록 가문으로 분열되어있지만 최종 목적은 여행자의 탈환이라는 점을 이용해', 850)
    .addScene('tell1:태양계에 있던 모든 몰락자 가문들을 연합시켜 도시를 침공하는 작전을 세우게 된다.', 850)
    .addScene('tell1:왕의 가문의 켈 크라스크는 악마, 겨울, 그리고 늑대의 가문에 전보가 보냈고', 850)
    .addScene('tell1:이들이 모두 작전에 참여하는데 동의하며 작전이 성사된다.', 850)
    .addScene('tell1:이미 지구에 있던 악마와 왕의 가문, 그리고 금성에 있던 겨울의 가문과는 달리', 850)
    .addScene('tell1:늑대의 가문은 목성대 너머에 있었고 이 때문에 이들이 연합에 합류하는데 시간이 많이 걸렸다.', 850)
    .addScene('tell1:리프의 수뇌부는 도시의 멸망은 시간문제라고 믿었고 지구에 이를 경고 할 방법이 없었기 때문에 손가락만 빨고 있는 상태가 되어버린다.', 850)
    .addScene('tell1:하지만 켈 비리사스가 이끄는 늑대의 가문이 소행성대에 잠시 주둔하고 있다는 첩보를 들은', 850)
    .addScene('tell1:마라 소프는 미래의 잠재적인 동맹이 될 도시를 도와주기 위해 늑대의 가문을 공격하기로 결정한다.', 850)
    .addScene('tell1:대분열.', 850)
    .addScene('tell1:각성자들의 존재를 모른 늑대의 가문의 켈 비리사스는 소행성 세레스에서 집결을 하기로 한다.', 850)
    .addScene('tell1:함대들이 점점 세레스에 집결할 때 갑자기 마라 소프 본인이 직접 이끄는 함선들과 전투기들이 나타났고', 850)
    .addScene('tell1:작디작은 규모의 함대를 본 비리사스는 이들한테 항복 명령을 내린다.', 850)
    .addScene('tell1:이에 각성자 함대는 엔진을 껐고 마라는 비리사스와 직접 대화를 하게 된다.', 850)
    .addScene('tell1:비리사스는 각성자들과의 전투로 시간과 병력만 허비할꺼라고 믿었고', 850)
    .addScene('tell1:마라와 대화하는 사이에 세레스에 집결하던 함대들을 멀리 보내려고 했다.', 850)
    .addScene('tell1:하지만 모든 늑대들의 함대가 떠나기도 전에 마라와 테키언들은 하빈저들을 소환해내고', 850)
    .addScene('tell1:소행성에 하빈저 폭격을 내려버린다. ', 850)
    .addScene('tell1:하빈저들의 능력으로 늑대들의 함선들과 서비터들이 작동불능이 되었고', 850)
    .addScene('tell1:이후 대폭발을 일으키며 늑대의 가문원들을 학살한다.', 850)
    .addScene('tell1:이 공격에서 늑대의 가문원들의 절반 이상이 죽어버렸고 이에 더해 켈 비리사스도 같이 휘말려 죽어버린 탓에', 850)
    .addScene('tell1:늑대의 가문은 소행성대에 뿔뿔이 흩어져 버린다.', 850)
    .addScene('tell1:이 사건은 대분열로 알려졌고 결국 늑대의 가문이 몰락자 가문 연합에 참가하지 못하며', 850)
    .addScene('tell1:황혼의 틈 전투는 도시의 승리로 끝나고 가문들은 다시 흩어지기 시작한다.', 850)
    .addScene('tell1:소행성대로 숨어버린 늑대의 가문은 곧 공석이 된 켈의 자리를 놓고 내전을 벌이기 시작한다', 850)
    .addScene('tell1:결국 늑대들은 3개의 세력으로 분열되는데', 850)
    .addScene('tell1:늑대 여남작 이르시스의 세력, 울부짖는 파리사스의 세력, 그리고 광인 스콜라스의 세력으로 분열된다.', 850)
    .addScene('tell1:늑대의 가문 내전,', 850)
    .addScene('tell1:내전은 이르시스의 우위로 시작했다. 이르시스는 늑대들의 서비터 계열인 칼릭스 계열의 서비터들 보다', 850)
    .addScene('tell1:더 막강한 권한을 가진 오르빅스 계열의 서비터들을 확보했다.', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)