//HTML 에서 defer 키워드를 작성하면 준비핸들러를 쓰지 않아도 된다.

const $indicator = $('.slides-pagination a');
const $container = $('.slides-container');

$indicator.on('click', function (evt) {
	evt.preventDefault();

	const nowIdx = $indicator.index(this);

	//컨테이너 이동
	$container.animate({ left: -1120 * nowIdx });

	//활성화 표시
	$indicator.eq(nowIdx).parent().addClass('on');
	$indicator.eq(nowIdx).parent().siblings().removeClass('on');
	//메소드 체인으로 아래와 같이 쓸 수 있다.
	// $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
});
