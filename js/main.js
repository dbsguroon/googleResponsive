$(function () {
    /* a 링크 눌렀을때 자연스럽게 슬라이드 되는 부분 */
    $(".navi a,.gotoTop a").click(function (e) {
        $.scrollTo(this.hash || 0, 1000);
        e.preventDefault();
    });
    
    /*trigger 버튼 */
    $(".trigger").click(function () {
        $(".navi").toggleClass("active");
    });
    $(".navi a,section").click(function () {
        $(".navi").removeClass("active");
    });
});