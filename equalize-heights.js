/*-------------------------------------------------------------------- 
 * JQuery Plugin: "Equalize Heights on Resize"
 * by:	Mary Chan
 *
 * Copyright (c) 2015 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 *
 * Description: Finds the tallest height of an element and sets all sibblings to the same height. 
 * Dependencies: jQuery 2.1.4;					  
 * Usage Example: In the HTML view, add the css class "equalizeChildren" to the parent container
 * of the divs you'd like to equalize in heights. 
 * 
 * Example:
 *
 * <div class="equalizeChildren">
 *	    <div>These are the divs you'd like to equalize in heights</div>
 *	    <div>These are the divs you'd like to equalize in heights</div>
 *	    <div>These are the divs you'd like to equalize in heights</div>
 *	</div>

 * Version: 1.0, 07.8.2015

--------------------------------------------------------------------*/
function equalizeHeights(){
	var tallest = 0;

	$(".equalizeChildren").children().each(function(){
		
		// Reset all heights
		$(this).height("auto");
		
		var currentHeight = $(this).height();
		
		// Loop through each child div and set the max height to variable "tallest"
		if (currentHeight > tallest){
			tallest = currentHeight;
		}

	});

	// Set all children to the tallest height
	$(".equalizeChildren").children().each(function(){
		$(this).height(tallest);
	});
};

// Initialize equal child heights
equalizeHeights();

// Equalize heights again on resize
$(window).resize(function(){
	equalizeHeights();
})
