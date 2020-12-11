/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


$(function(){
    $('#title').on('keydown',e =>{
        e = e || window.event;
        const code = e.keyCode || e.which;
        if(code == 13){
            event.preventDefault();
            $('.demo-box').append($("<li><input type='checkbox'/><p onclick=''></p><a href='javascript:remove(1)'>-</a></li>"));
            $('ol li').last().find('p').html( $('#title')[0].value);
            $('#todocount').html(parseInt($('#todocount').text()) + 1);
            $('#title')[0].value = '';
        }
    })
    
    $('ol').on('click','a',function () {
        event.preventDefault();
        $(this).parent().remove();
        $('#todocount').html(parseInt($('#todocount').text()) - 1);
    })
    
    $('ol').on('click','input',function(){
        
        $(this).parent().remove();
        $('ul').append($(this).parent())
        $('#todocount').html(parseInt($('#todocount').text()) - 1);
        $('#donecount').html(parseInt($('#donecount').text()) + 1);
    })

    $('ul').on('click','a',function () {
        event.preventDefault();
        $(this).parent().remove();
        $('#donecount').html(parseInt($('#donecount').text()) - 1);
    })

    $('ul').on('click','input',function(){
        $(this).parent().remove();
        $('ol').append($(this).parent())
        $('#todocount').html(parseInt($('#todocount').text()) + 1);
        $('#donecount').html(parseInt($('#donecount').text()) - 1);
    })
})