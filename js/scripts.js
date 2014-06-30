// JavaScript Document
jQuery(document).ready(function() {
	jQuery("#type_site").change(function() {
		var typeOfSite = jQuery("#type_site :selected").val(),
			formOftype = jQuery("#config_site");
			
			/* Обнуляем общую и сумм с НДС в поле вывода */
			jQuery("#summ span").text("0");
			jQuery("#summ_nds span").text("0");

			/* Выбираем соответствующую форму из файла */
			formOftype.load("/js/fullform.php",{option:typeOfSite});
			
			/* Выбираем все чекбоксы которые были подгружены, в этом нам поможет функция live */
			formOftype.live("change",function() {
				
				/* При проведении действий пересчитываем сумму в зависимости от выбраных чекбоксов */
				var totalSum = 0, /* Полную сумму сначала приравниваем к нулю */
					totalSumNDS = 0,
					noMat = 0,
					choiceCMS = parseInt(jQuery("#cms_radio :selected").val());
					if (isNaN(choiceCMS)) choiceCMS = 0;
					if (choiceCMS == 2000 || choiceCMS == 2500 || choiceCMS == 3300 || choiceCMS == 2800)
						{
							matCheck = 1;
						}
					else {matCheck = 0;}
					/* Приплюсовываем сумму стоимости CMS */
					totalSum += choiceCMS;
				
				/* Пересчитываем все чекбоксы которые отмечены галочкой*/
				jQuery(this + "input[name=''] :checked").each(function() {
						if (isNaN(jQuery(this).val())) totalSum += 0;
						
						totalSum += parseInt(jQuery(this).val());
					});

				/* Считаем однотонные полы. Каждое поле ввода проверяем на введеное значение, если больше нуля то считаем его */
				jQuery("#inputCell").each(function() {
						var inputCell = parseInt(jQuery("#inputCell").val()) * (parseInt(jQuery("#inputCell").attr("name"))+totalSum);
						
						if (parseInt(jQuery("#inputCell").val()) < 7)
							{
								var inputCell = 15000;
								// if (choiceCMS == 2000) {inputCell = 15000 + parseInt(jQuery("#inputCell").val())*(totalSum - choiceCMS);}
								// if (choiceCMS == 2500) {inputCell = 18000 + parseInt(jQuery("#inputCell").val())*(totalSum - choiceCMS);}
								// if (choiceCMS == 3200) {inputCell = 25000 + parseInt(jQuery("#inputCell").val())*(totalSum - choiceCMS);}
							}
						else if (6 < parseInt(jQuery("#inputCell").val()) && parseInt(jQuery("#inputCell").val()) < 21) 
							{
								var inputCell = parseInt(jQuery("#inputCell").val()) * totalSum;
							}
							
						else if (parseInt(jQuery("#inputCell").val()) > 20) /* пересчитываем если площадь больше 20 квадратов */
							{
								if (choiceCMS == 2000) {var inputCell = parseInt(jQuery("#inputCell").val()) * (totalSum - 200);}
								if (choiceCMS == 2500) {var inputCell = parseInt(jQuery("#inputCell").val()) * (totalSum - 500);}
								if (choiceCMS == 3200) {var inputCell = parseInt(jQuery("#inputCell").val()) * (totalSum - 400);}
							}
						else if (isNaN(inputCell)) 
							{
								choiceCMS = 0;
							}

						totalSum = inputCell ;
				});

				/* считаем промышленные полы */
				jQuery("#inputCellProm").each(function() {
						
						if (parseInt(jQuery("#inputCellProm").val()) < 51) var inputCellProm = parseInt(jQuery("#inputCellProm").val()) * 1400;
						if (parseInt(jQuery("#inputCellProm").val()) > 50 && parseInt(jQuery("#inputCellProm").val()) < 101) var inputCellProm = parseInt(jQuery("#inputCellProm").val()) * 1300;
						if (parseInt(jQuery("#inputCellProm").val()) > 100) var inputCellProm = parseInt(jQuery("#inputCellProm").val()) * 1200;						
						if (isNaN(inputCellProm)) choiceCMS = 0;

						totalSum = inputCellProm ;
				});

				/* считаем 3d полы */
				jQuery("#inputCell3d").each(function() {
						
						if (0 < parseInt(jQuery("#inputCell3d").val()) && parseInt(jQuery("#inputCell3d").val()) < 7) 
							{
								var inputCell3d = 35000 + parseInt(jQuery("#inputCell3d").val())*(totalSum - choiceCMS);
							}
						else if (6 < parseInt(jQuery("#inputCell3d").val()) && parseInt(jQuery("#inputCell3d").val()) < 21) 
							{
								var inputCell3d = parseInt(jQuery("#inputCell3d").val()) * totalSum;
							}
							else if (parseInt(jQuery("#inputCell3d").val()) > 20) 
								{
									var inputCell3d = parseInt(jQuery("#inputCell3d").val()) * (totalSum - 500);
								}
								else if (isNaN(inputCell3d)) 
									{
										choiceCMS = 0;
									}

						totalSum = inputCell3d ;
						
						/* проверка на нажатие enter */

					    var myEvent = window.event ? window.event : aEvent;
					    if (13 == myEvent.keyCode)
					    {
					        alert("Enter key was pressed!");
					    }
				});
			

				/* Подсчет и вывод суммы итоговой */
				/*totalSumNDS = matCheck;*/
				totalSumNDS = totalSum * 1.18 ;
				jQuery("#summ span").text(totalSum);
				jQuery("#summ_nds span").text(totalSumNDS);
			});
	});	
	
});