/**

 * @Script js for (Template/Project Name)

 *

 * @project     - Project Name

 * @author      - 

 * @created_by  - 

 * @created_at  - 

 * @modified_by -

 */





/**

 * ========================================================

 * this function execute when window properly loaded

 * ===========================================================

 */



$(window).on('load', function () {



    // code should be execute here



});







/**

 * ========================================================

 * this function execute when DOM element ready 

 * ===========================================================

 */



$(document).ready(function () {





    // Start counting, do this on DOM ready or with Waypoints.

    if ($('.counter').length) {

        $('.counter').counterUp({

            delay: 30,

            time: 2000

        });

    }


    





    // wow js init

    $(function () {

        var wow = new WOW({

            animateClass: 'animated',

            mobile: true

        });

        wow.init();

    });



});

