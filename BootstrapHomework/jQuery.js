$('#DropdownButtons a').click(function () {
	var selected = $(this).attr('aria-controls');
$('#divs div').hide();
$('#homePageContent').hide();
$('#' + selected).show();
});

$('#HomeButton').click(function () {
	$('#divs div').hide();
$('#homePageContent').show();
});

$('#AlertButton').click(function () {
	$('#homePageContent').hide();
$('#AlertContent').show();
});

$('#CardButton').click(function () {
	$('#homePageContent').hide();
$('#CardContent').show();
});

$('#CarouselButton').click(function () {
	$('#homePageContent').hide();
$('#CarouselContent').show();
});

$('#DropdownButton').click(function () {
	$('#homePageContent').hide();
$('#DropdownContent').show();
});

$('#JumbotronButton').click(function () {
	$('#homePageContent').hide();
$('#JumbotronContent').show();
});

$('#NavbarButton').click(function () {
	$('#homePageContent').hide();
$('#NavbarContent').show();
});

$('#ListGroupButton').click(function () {
	$('#homePageContent').hide();
$('#ListGroupContent').show();
});

$('#ModalButton').click(function () {
	$('#homePageContent').hide();
$('#ModalContent').show();
});

$('#PaginationButton').click(function () {
	$('#homePageContent').hide();
$('#PaginationContent').show();
});

$('#ToastButton').click(function () {
	$('#homePageContent').hide();
$('#ToastsContent').show();
});

$('#ModalPreviewButton').click(function () {
	$('#myModal').modal({ show: true });
});
