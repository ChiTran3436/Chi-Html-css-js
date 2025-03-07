const showData = (data) => {
    let shtml = `<tr>
                <th>TÊN</th>
                <th>GIÁ</th>
                <th>THAY ĐỔI TRONG 24h</th>
                <th>THAY ĐỔI TRONG 1h</th>
        </tr>`;

    data.map(e => {
        shtml += ` <tr>
                <td>${e.name}</td>
                <td>${e.price}</td>
                <td>${e.percent_change_24h}</td>
                <td>${e.percent_change_1h}</td>
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