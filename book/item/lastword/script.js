

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
    .addScene('tell1:오늘이 올 줄, 그와 함께 마지막 교훈이 올 줄을 알고 있었다…', 850)
    .addScene('tell1:만사에는 끝이 있단다, 얘야. 좋은 끝도 있고 나쁜 끝도 있지.', 850)
    .addScene('tell1:물론 최고의 시간은 짧아 보이고 최악의 시간은 긴 것처럼 느껴지지만, 변치 않는 것은 영원뿐이다.', 850)
    .addScene('tell1:나는 그 영원을 맞이하러 떠난다.', 850)
    .addScene('tell1:네가 운이 좋다면 언젠가는 너도 그러겠지.', 850)
    .addScene('tell1:하지만 지금 네게는 가지 않은 길, 살지 않은 삶이 있다.', 850)
    .addScene('tell1:마음 속에 증오를 품고 있겠지. 대부분 그렇단다.', 850)
    .addScene('tell1:중요한 건 그것에게 이용당하지 말고, 그걸 이용하는 것이다.', 850)
    .addScene('tell1:하지만 이것만은 알아 두거라. 복수가 목적 의식을 심어 주긴 해도 목적은 아니라는 걸.', 850)
    .addScene('tell1:마지막으로 너에게 직접 말해주고 싶었지만', 850)
    .addScene('tell1:우리가 쫓는 사냥감을 생각하면 글로 남겨 두는 게 안전하겠지.', 850)
    .addScene('tell1:선을 위해 싸울 때 가장 나쁜 게 뭐냐고? 아무리 원해도 늘 이길 수는 없다는 것이다.', 850)
    .addScene('tell1:하지만 개의치 않는단다.', 850)
    .addScene('tell1:우리는 옳은 일을 해야 하기 때문에 옳은 일을 하는 것이니까.', 850)
    .addScene('tell1:그러니 누군가가 해를 끼친다면, 너나 네 일족에게 그림자를 드리운다면', 850)
    .addScene('tell1:정의로써 그 죄를 벌하기 위하여 사냥을 하거라.', 850)
    .addScene('tell1:네가 옳지 않은 일을 당했다는 이유로 사냥을 해서는 안 된다.', 850)
    .addScene('tell1:상대가 옳지 않은 짓을 했다는 이유로 사냥을 하거라.', 850)
    .addScene('tell1:그 차이는 엄청나단다, 얘야.', 850)
    .addScene('tell1:전자의 경우에 너는 이기적인 인간일 뿐이다. 후자의 경우에는 영웅이지.', 850)
    .addScene('tell1:나는 네게서 영웅의 자질을 본다.', 850)
    .addScene('tell1:이 마지막 가르침과 함께, 선물을 전하마. 네 손에 딱 맞을 것이다.', 850)
    .addScene('tell1:무게는 부담이 없고 방아쇠는 매끄럽지. 네 뜻대로 사용하거라.', 850)
    .addScene('tell1:네가 올바르게 사용할 거라는 걸 알고 있다.', 850)
    .addScene('tell1:이제 이건 네 것이다. 이제 마지막 불꽃이 사그라들고 모든 이야기를 하는 순간까지.', 850)
    .addScene('tell1:그때까지.', 850)
    .addScene('tell1:무사히 여행하고, 정확하게 조준하거라. 그리고 사냥에 행운이 따르길 빈다.', 850)
    .addScene('tell1:자렌', 850)
    .addScene('tell1:—신 말푸르의 세 번째 아버지 자렌 워드가 그에게 보낸 편지.', 850)
    .addScene('tell1:워드 가문이 거지들의 협곡 너머의 숲에서 악명 높은 드레젠 요르와 불운한 결투를 벌이기 전에 쓰임', 850)