jQuery(document).ready(function()  {
  <!-- speedbump-->
    $("a.external").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            exUrl = $(this).attr("href");

            if ($(this).attr("target") == "_blank") {
                $('#thirdPartyNewWindow').modal('show');
            } else {
                $('#thirdParty').modal('show');
            }
        });
    });

    $("a.email").each(function () {

        $(this).click(function (e) {
            e.preventDefault();
            exUrl = $(this).attr("href");
            $('#email').modal('show');
        });

    });
}); 
//jQuery('.external').click(
//		function()
//		{
//			jQuery('#SpdbmpMdlCntn').attr('href', jQuery(this).attr('href'));
//			jQuery('.SpdbmpMdlFd').fadeIn(
//				300,
//				function()
//				{
//					jQuery('.SpdbmpMdl').animate({'top':'40%'},300);
//				}
//			);
//			return false;
//		}
//	);
//	
//	jQuery('.SpdbmpMdlCls, .SpdbmpMdlFd, #SpdbmpMdlCntn').click(
//		function()
//		{
//			jQuery('.SpdbmpMdl').animate(
//				{'top':'-50%'},
//				300,
//				function()
//				{
//					jQuery('.SpdbmpMdlFd').fadeOut(300);
//				}
//			);
//		}
//	);
//	
//	jQuery('.email').click(
//		function()
//		{
//			jQuery('#UnscrEmlMdlCntn').attr('href', jQuery(this).attr('href'));
//			jQuery('.UnscrEmlMdlFd').fadeIn(
//				300,
//				function()
//				{
//					jQuery('.UnscrEmlMdl').animate({'top':'40%'},300);
//				}
//			);
//			return false;
//		}
//	);
//	
//	jQuery('.UnscrEmlMdlCls, .UnscrEmlMdlFd, #UnscrEmlMdlCntn').click(
//		function()
//		{
//			jQuery('.UnscrEmlMdl').animate(
//				{'top':'-50%'},
//				300,
//				function()
//				{
//					jQuery('.UnscrEmlMdlFd').fadeOut(300);
//				}
//			);
//		}
//	);
//	jQuery('.financial').click(
//		function()
//		{
//			jQuery('#SpdbmpMdlCntn2').attr('href', jQuery(this).attr('href'));
//			jQuery('.SpdbmpMdlFd2').fadeIn(
//				300,
//				function()
//				{
//					jQuery('.SpdbmpMdl2').animate({'top':'40%'},300);
//				}
//			);
//			return false;
//		}
//	);
//	
//	jQuery('.SpdbmpMdlCls, .SpdbmpMdlFd2, #SpdbmpMdlCntn2').click(
//		function()
//		{
//			jQuery('.SpdbmpMdl2').animate(
//				{'top':'-50%'},
//				300,
//				function()
//				{
//					jQuery('.SpdbmpMdlFd2').fadeOut(300);
//				}
//			);
//		}
//	);
//	jQuery(document).keyup(
//		function(e)
//		{
//			if (e.keyCode == 27)
//			{
//				jQuery('.SpdbmpMdlCls').trigger('click');
//				jQuery('.UnscrEmlMdlCls').trigger('click');
//				
//			}
//		}
//	);
//	
//
