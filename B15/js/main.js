const showData = (data) => {
    let shtml = `<tr>
                <th>TÊN</th>
                <th>GIÁ</th>
                <th>THAY ĐỔI TRONG 24h</th>
                <th>THAY ĐỔI TRONG 1h</th>
        </tr>`;
    //sort
    data.sort((a, b) => a.price < b.price ? 1 : -1);


    data.map(e => {
        let price = (e.price).toFixed(2);
        let change24hColor = e.percent_change_24h < 0 ? 'text_red' : 'text_green';
        let change1hColor = e.percent_change_1h < 0 ? 'text_red' : 'text_green';
        shtml += ` <tr>
                <td>${e.name}</td>
                <td>${price}</td>
                <td class="${change24hColor}">${e.percent_change_24h}</td>
                <td class="${change1hColor}">${e.percent_change_1h}</td>
            </tr>`
    });

    $('#main').html(shtml);
}

const getData = async () => {
    const url = 'https://apiforlearning.zendvn.com/api/get-coin'

    let res = await fetch(url)
    let data = await res.json()

    console.log(data);
    showData(data)
}

$(document).ready(function () {
    getData()

});