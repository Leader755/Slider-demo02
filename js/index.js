var page=0;
var len=$(".slide-img li").length;
var play=true;

//����һ����������
function slideplay(){
    //�������е�ͼƬ����
    $(".slide-img li").css("display","none")
    //ָ��ͼƬ��ʾeq(index),ָ����index()ͼƬ��ʾ
    $(".slide-img li").eq(page).css("display","block");
    //���а�ť����ʽ����
    $(".slide-page li").css("background","#036");
    //ָ��һ����ť��ʽ
    $(".slide-page li").eq(page).css("background","#00C");
    //�����Ұ�ť����
    $(".Button").css("display","none")
    $.getJSON('data')
}

//����һ���ֲ�����
function slide(){
    if(play){
        slideplay();
        page++;
        page%=len;}


    setTimeout(slide,1000)
}
//�״�ִ��
slide();

//�ֱ���ͣ��ͣ����
$(".slide").mouseover(function(){
    play=false;
    $(".Button").css("display","block")
}).mouseout(function(){play=true})

//�����ͣ�л�
$(".slide-page li").mousemove(function(){
    page=$(this).index();
    slideplay();
})

//���Ұ�ť�л�
$(".leftbutton").click(function(){
        page--;
        page%=len;
        slideplay();
    }
)
$(".rightbutton").click(function(){
        page++;
        page%=len;
        slideplay();
    }
)

