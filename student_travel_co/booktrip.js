const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded" , () =>
{
    $("#travel_account").addEventListener("click", evt =>
    {
        document.getElementById("text_box").select();
    })

});

document.write("BOOKING SCRIPTS ARE UNDER CONSTRUCTION");