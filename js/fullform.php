<?
if (isset($_POST["option"])) {
	$option = $_POST["option"];
	
	if ($option == 1) {
		print '
			<h3>Наливные 3D полы, художественные</h3>
            <div id="design">

                   				<p><strong>Дизайн:</strong></p>
											
								<p><span>Тип поверхности.</span></p>
								<p><select id="cms_radio">
									<option value="6500">Матовая поверхность</option>
									<option value="6000">Глянцевая поверхность</option>
								</select></p>								

				<p><strong>Площадь помещения</strong></p>
				<table border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="270px">площадь</td>
					<td><input id="inputCell3d" name="2000" onkeypress="captureEnter(event) size="1" type="text" value="0"></td>
				</tr>
				</table>
            </div>
            
            <div id="programming">
				<p><strong>Прайс-лист:</strong></p>
				<p><strong>Наливные 3D полы, художественные:</strong></p>				
				<p><span>Площадь до 5 м2 = 35000  <br>
				Площадь от 6 до 20 м2 – 6500(матовый) - 6000 (глянцевый).<br/>
				Площадь более 20 м2 - 6000 (матовый) – 5500 (глянцевый).<br/>
				<br>
				</span></p>
				
				<p><strong>Промышленные полы:</strong></p>
				<p><span>Площадь до 50 м2- 1400 р/м2. <br/>
				Площадь до 100 м2- 1300 р/м2.<br/>
				Площадь более 100 м2- 1200 р/м2.<br/>
				</span></p>
				
				<p><strong>Наливные однотонные полы:</strong></p>
				<p><span>Площадь до 6 м2  – 15000.<br/>
				Площадь от 6 до 20 м2 – 1400 (для пром. помещений), 3000 (для квартир).<br/>
				</span></p>

				<p><strong>Разработка дизайн-проекта пола:</strong></p>
				<p><span>800 р/м2
				</span></p>
            </div>
		';
	}
	
	if ($option == 2) {
		print '
			<h3>Промышленные полы</h3>
            <div id="design">
                
				<p><strong>Площадь помещения:</strong></p>
				<table border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="270px">Площадь помещения (кв.м.)</td>
					<td><input id="inputCellProm" name="2000" size="1" type="text" value="0"></td>
				</tr>
				</table>
            </div>

            <div id="programming">
				
				<p><strong>Прайс-лист:</strong></p>
				<p><strong>Наливные 3D полы, художественные:</strong></p>				
				<p><span>Площадь до 5 м2 = 35000  <br>
				Площадь от 6 до 20 м2 – 6500(матовый) - 6000 (глянцевый).<br/>
				Площадь более 20 м2 - 6000 (матовый) – 5500 (глянцевый).<br/>
				<br>
				</span></p>
				
				<p><strong>Промышленные полы:</strong></p>
				<p><span>Площадь до 50 м2- 1400 р/м2. <br/>
				Площадь до 100 м2- 1300 р/м2.<br/>
				Площадь более 100 м2- 1200 р/м2.<br/>
				</span></p>
				
				<p><strong>Наливные однотонные полы:</strong></p>
				<p><span>Площадь до 6 м2  – 15000.<br/>
				Площадь от 6 до 20 м2 – 1400 (для пром. помещений), 3000 (для квартир).<br/>
				</span></p>

				<p><strong>Разработка дизайн-проекта пола:</strong></p>
				<p><span>800 р/м2
				</span></p>

            </div>
		';
	}
	if ($option == 3) {
		print '
			<h3>Однотонные полы</h3>
            <div id="design">

            	<p><strong>Дизайн:</strong></p>

            	<p><span>Тип поверхности.</span></p>
					<p><select id="cms_radio">
						<option value="1400">для пром. помещений</option>
						<option value="3000">для квартир</option>
					</select></p>

				<p><strong>Площадь помещения:</strong></p>
				<table border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="260px">Площадь помещения (кв.м.)</td>
					<td><input id="inputCell" name="0" size="3" type="text" value="0"></td>
				</tr>
				</table>
            </div>
            
            <div id="programming">
				<p><strong>Прайс-лист:</strong></p>
				<p><strong>Наливные 3D полы, художественные:</strong></p>				
				<p><span>Площадь до 5 м2 = 35000  <br>
				Площадь от 6 до 20 м2 – 6500(матовый) - 6000 (глянцевый).<br/>
				Площадь более 20 м2 - 6000 (матовый) – 5500 (глянцевый).<br/>
				<br>
				</span></p>
				
				<p><strong>Промышленные полы:</strong></p>
				<p><span>Площадь до 50 м2- 1400 р/м2. <br/>
				Площадь до 100 м2- 1300 р/м2.<br/>
				Площадь более 100 м2- 1200 р/м2.<br/>
				</span></p>
				
				<p><strong>Наливные однотонные полы:</strong></p>
				<p><span>Площадь до 6 м2  – 15000.<br/>
				Площадь от 6 до 20 м2 – 1400 (для пром. помещений), 3000 (для квартир).<br/>
				</span></p>

				<p><strong>Разработка дизайн-проекта пола:</strong></p>
				<p><span>800 р/м2
				</span></p>
            </div>
		';
	}	
}


?>