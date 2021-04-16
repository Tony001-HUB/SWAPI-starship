function HTMLModalRender(data) {
    return `
    <div id="myModal" class="myModal">         
        <div class="modal-content" style="width: 35%;">
        <table>
        <colgroup>
            <col span="2" style="background:Khaki"><!-- С помощью этой конструкции задаем цвет фона для первых двух столбцов таблицы-->
            <col style="background-color:LightCyan"><!-- Задаем цвет фона для следующего (одного) столбца таблицы-->
        </colgroup>
        <tr>
            <th>№ п/п</th>
            <th>Model:</th>
            <th>${data.model}</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Length:</td>
            <td>${data.length}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Starship class:</td>
            <td>${data.starship_class}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Max atmosphering speed:</td>
            <td>${data.max_atmosphering_speed}</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Hyperdrive rating:</td>
            <td>${data.starship_class}</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Cost in credits:</td>
            <td>${data.cost_in_credits}</td>
        </tr>
        <tr>
            <td>6</td>
            <td>crew:</td>
            <td>${data.crew}</td>
        </tr>
        <tr>
            <td>7</td>
            <td>consumables:</td>
            <td>${data.consumables}</td>
        </tr>
        </table>
        <div class="modal-footer">
        <a class="waves-effect waves-light btn close">close</a>
        </div>
    </div>
    `
}

export {HTMLModalRender}