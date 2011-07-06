﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Russian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang[ 'ru' ] = {
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir: 'ltr',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle: 'Визуальный редактор текста, %1, нажмите ALT-0 для открытия справки.',

	// ARIA descriptions.
	toolbars: 'Панели инструментов редактора',
	editor: 'Визуальный редактор текста',

	// Toolbar buttons without dialogs.
	source: 'Источник',
	newPage: 'Новая страница',
	save: 'Сохранить',
	preview: 'Предварительный просмотр',
	cut: 'Вырезать',
	copy: 'Копировать',
	paste: 'Вставить',
	print: 'Печать',
	underline: 'Подчеркнутый',
	bold: 'Полужирный',
	italic: 'Курсив',
	selectAll: 'Выделить все',
	removeFormat: 'Убрать форматирование',
	strike: 'Зачеркнутый',
	subscript: 'Подстрочный индекс',
	superscript: 'Надстрочный индекс',
	horizontalrule: 'Вставить горизонтальную линию',
	pagebreak: 'Вставить разрыв страницы для печати',
	pagebreakAlt: 'Разрыв страницы',
	unlink: 'Убрать ссылку',
	undo: 'Отменить',
	redo: 'Повторить',

	// Common messages and labels.
	common: {
		browseServer: 'Выбор на сервере',
		url: 'Ссылка',
		protocol: 'Протокол',
		upload: 'Загрузка',
		uploadSubmit: 'Загрузить на сервер',
		image: 'Изображение',
		flash: 'Flash',
		form: 'Форма',
		checkbox: 'Флаговая кнопка',
		radio: 'Кнопка выбора',
		textField: 'Текстовое поле',
		textarea: 'Многострочное текстовое поле',
		hiddenField: 'Скрытое поле',
		button: 'Кнопка',
		select: 'Список выбора',
		imageButton: 'Изображение-кнопка',
		notSet: '<не указано>',
		id: 'Идентификатор',
		name: 'Имя',
		langDir: 'Направление текста',
		langDirLtr: 'Слева направо (LTR)',
		langDirRtl: 'Справа налево (RTL)',
		langCode: 'Код языка',
		longDescr: 'Длинное описание ссылки',
		cssClass: 'Класс CSS',
		advisoryTitle: 'Заголовок',
		cssStyle: 'Стиль',
		ok: 'ОК',
		cancel: 'Отмена',
		close: 'Закрыть',
		preview: 'Предпросмотр',
		generalTab: 'Основное',
		advancedTab: 'Дополнительно',
		validateNumberFailed: 'Это значение не является числом.',
		confirmNewPage: 'Несохранённые изменения будут потеряны! Вы действительно желаете перейти на другую страницу?',
		confirmCancel: 'Некоторые параметры были изменены. Вы уверены, что желаете закрыть без сохранения?',
		options: 'Параметры',
		target: 'Цель',
		targetNew: 'Новое окно (_blank)',
		targetTop: 'Главное окно (_top)',
		targetSelf: 'Текущее окно (_self)',
		targetParent: 'Родительское окно (_parent)',
		langDirLTR: 'Слева направо (LTR)',
		langDirRTL: 'Справа налево (RTL)',
		styles: 'Стиль',
		cssClasses: 'Классы CSS',
		width: 'Ширина',
		height: 'Высота',
		align: 'Выравнивание',
		alignLeft: 'По левому краю',
		alignRight: 'По правому краю',
		alignCenter: 'По центру',
		alignTop: 'По верху',
		alignMiddle: 'По середине',
		alignBottom: 'По низу',
		invalidHeight: 'Высота задается числом.',
		invalidWidth: 'Ширина задается числом.',
		invalidCssLength: 'Значение, указанное в поле "%1", должно быть положительным целым числом. Допускается указание единиц меры CSS (px, %, in, cm, mm, em, ex, pt, или pc).',
		invalidHtmlLength: 'Значение, указанное в поле "%1", должно быть положительным целым числом. Допускается указание единиц меры HTML (px или %).',

		// Put the voice-only part of the label in the span.
		unavailable: '%1<span class="cke_accessibility">, недоступно</span>'
	},

	contextmenu: {
		options: 'Параметры контекстного меню'
	},

	// Special char dialog.
	specialChar: {
		toolbar: 'Вставить специальный символ',
		title: 'Выберите специальный символ',
		options: 'Выбор специального символа'
	},

	// Link dialog.
	link: {
		toolbar: 'Вставить/Редактировать ссылку',
		other: '<другой>',
		menu: 'Редактировать ссылку',
		title: 'Ссылка',
		info: 'Информация о ссылке',
		target: 'Цель',
		upload: 'Загрузка',
		advanced: 'Дополнительно',
		type: 'Тип ссылки',
		toUrl: 'Ссылка',
		toAnchor: 'Ссылка на якорь в тексте',
		toEmail: 'Email',
		targetFrame: '<фрейм>',
		targetPopup: '<всплывающее окно>',
		targetFrameName: 'Имя целевого фрейма',
		targetPopupName: 'Имя всплывающего окна',
		popupFeatures: 'Параметры всплывающего окна',
		popupResizable: 'Изменяемый размер',
		popupStatusBar: 'Строка состояния',
		popupLocationBar: 'Панель адреса',
		popupToolbar: 'Панель инструментов',
		popupMenuBar: 'Панель меню',
		popupFullScreen: 'Полноэкранное (IE)',
		popupScrollBars: 'Полосы прокрутки',
		popupDependent: 'Зависимое (Netscape)',
		popupLeft: 'Отступ слева',
		popupTop: 'Отступ сверху',
		id: 'Идентификатор',
		langDir: 'Направление текста',
		langDirLTR: 'Слева направо (LTR)',
		langDirRTL: 'Справа налево (RTL)',
		acccessKey: 'Клавиша доступа',
		name: 'Имя',
		langCode: 'Код языка',
		tabIndex: 'Последовательность перехода',
		advisoryTitle: 'Заголовок',
		advisoryContentType: 'Тип содержимого',
		cssClasses: 'Классы CSS',
		charset: 'Кодировка ресурса',
		styles: 'Стиль',
		rel: 'Отношение',
		selectAnchor: 'Выберите якорь',
		anchorName: 'По имени',
		anchorId: 'По идентификатору',
		emailAddress: 'Email адрес',
		emailSubject: 'Тема сообщения',
		emailBody: 'Текст сообщения',
		noAnchors: '(В документе нет ни одного якоря)',
		noUrl: 'Пожалуйста, введите ссылку',
		noEmail: 'Пожалуйста, введите email адрес'
	},

	// Anchor dialog
	anchor: {
		toolbar: 'Вставить / редактировать якорь',
		menu: 'Изменить якорь',
		title: 'Свойства якоря',
		name: 'Имя якоря',
		errorName: 'Пожалуйста, введите имя якоря',
		remove: 'Удалить якорь'
	},

	// List style dialog
	list: {
		numberedTitle: 'Свойства нумерованного списка',
		bulletedTitle: 'Свойства маркированного списка',
		type: 'Тип',
		start: 'Начиная с',
		validateStartNumber: 'Первый номер списка должен быть задан обычным целым числом.',
		circle: 'Круг',
		disc: 'Окружность',
		square: 'Квадрат',
		none: 'Нет',
		notset: '<не указано>',
		armenian: 'Армянская нумерация',
		georgian: 'Грузинская нумерация (ани, бани, гани, и т.д.)',
		lowerRoman: 'Строчные римские (i, ii, iii, iv, v, и т.д.)',
		upperRoman: 'Заглавные римские (I, II, III, IV, V, и т.д.)',
		lowerAlpha: 'Строчные латинские (a, b, c, d, e, и т.д.)',
		upperAlpha: 'Заглавные латинские (A, B, C, D, E, и т.д.)',
		lowerGreek: 'Строчные греческие (альфа, бета, гамма, и т.д.)',
		decimal: 'Десятичные (1, 2, 3, и т.д.)',
		decimalLeadingZero: 'Десятичные с ведущим нулём (01, 02, 03, и т.д.)'
	},

	// Find And Replace Dialog
	findAndReplace: {
		title: 'Поиск и замена',
		find: 'Найти',
		replace: 'Заменить',
		findWhat: 'Найти:',
		replaceWith: 'Заменить на:',
		notFoundMsg: 'Искомый текст не найден.',
		matchCase: 'Учитывать регистр',
		matchWord: 'Только слово целиком',
		matchCyclic: 'По всему тексту',
		replaceAll: 'Заменить всё',
		replaceSuccessMsg: 'Успешно заменено %1 раз(а).'
	},

	// Table Dialog
	table: {
		toolbar: 'Таблица',
		title: 'Свойства таблицы',
		menu: 'Свойства таблицы',
		deleteTable: 'Удалить таблицу',
		rows: 'Строки',
		columns: 'Колонки',
		border: 'Размер границ',
		widthPx: 'пикселей',
		widthPc: 'процентов',
		widthUnit: 'единица измерения',
		cellSpace: 'Внешний отступ ячеек',
		cellPad: 'Внутренний отступ ячеек',
		caption: 'Заголовок',
		summary: 'Итоги',
		headers: 'Заголовки',
		headersNone: 'Без заголовков',
		headersColumn: 'Левая колонка',
		headersRow: 'Верхняя строка',
		headersBoth: 'Сверху и слева',
		invalidRows: 'Количество строк должно быть больше 0.',
		invalidCols: 'Количество столбцов должно быть больше 0.',
		invalidBorder: 'Размер границ должен быть числом.',
		invalidWidth: 'Ширина таблицы должна быть числом.',
		invalidHeight: 'Высота таблицы должна быть числом.',
		invalidCellSpacing: 'Внешний отступ ячеек (cellspacing) должен быть числом.',
		invalidCellPadding: 'Внутренний отступ ячеек (cellpadding) должен быть числом.',

		cell: {
			menu: 'Ячейка',
			insertBefore: 'Вставить ячейку слева',
			insertAfter: 'Вставить ячейку справа',
			deleteCell: 'Удалить ячейки',
			merge: 'Объединить ячейки',
			mergeRight: 'Объединить с правой',
			mergeDown: 'Объединить с нижней',
			splitHorizontal: 'Разделить ячейку по горизонтали',
			splitVertical: 'Разделить ячейку по вертикали',
			title: 'Свойства ячейки',
			cellType: 'Тип ячейки',
			rowSpan: 'Объединяет строк',
			colSpan: 'Объединяет колонок',
			wordWrap: 'Перенос по словам',
			hAlign: 'Горизонтальное выравнивание',
			vAlign: 'Вертикальное выравнивание',
			alignBaseline: 'По базовой линии',
			bgColor: 'Цвет фона',
			borderColor: 'Цвет границ',
			data: 'Данные',
			header: 'Заголовок',
			yes: 'Да',
			no: 'Нет',
			invalidWidth: 'Ширина ячейки должна быть числом.',
			invalidHeight: 'Высота ячейки должна быть числом.',
			invalidRowSpan: 'Количество объединяемых строк должно быть задано числом.',
			invalidColSpan: 'Количество объединяемых колонок должно быть задано числом.',
			chooseColor: 'Выберите'
		},

		row: {
			menu: 'Строка',
			insertBefore: 'Вставить строку сверху',
			insertAfter: 'Вставить строку снизу',
			deleteRow: 'Удалить строки'
		},

		column: {
			menu: 'Колонка',
			insertBefore: 'Вставить колонку слева',
			insertAfter: 'Вставить колонку справа',
			deleteColumn: 'Удалить колонки'
		}
	},

	// Button Dialog.
	button: {
		title: 'Свойства кнопки',
		text: 'Текст (Значение)',
		type: 'Тип',
		typeBtn: 'Кнопка',
		typeSbm: 'Отправка',
		typeRst: 'Сброс'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio: {
		checkboxTitle: 'Свойства флаговой кнопки',
		radioTitle: 'Свойства кнопки выбора',
		value: 'Значение',
		selected: 'Выбрано'
	},

	// Form Dialog.
	form: {
		title: 'Свойства формы',
		menu: 'Свойства формы',
		action: 'Действие',
		method: 'Метод',
		encoding: 'Кодировка'
	},

	// Select Field Dialog.
	select: {
		title: 'Свойства списка выбора',
		selectInfo: 'Информация о списке выбора',
		opAvail: 'Доступные варианты',
		value: 'Значение',
		size: 'Размер',
		lines: 'строк(и)',
		chkMulti: 'Разрешить выбор нескольких вариантов',
		opText: 'Текст',
		opValue: 'Значение',
		btnAdd: 'Добавить',
		btnModify: 'Изменить',
		btnUp: 'Поднять',
		btnDown: 'Опустить',
		btnSetValue: 'Пометить как выбранное',
		btnDelete: 'Удалить'
	},

	// Textarea Dialog.
	textarea: {
		title: 'Свойства многострочного текстового поля',
		cols: 'Колонок',
		rows: 'Строк'
	},

	// Text Field Dialog.
	textfield: {
		title: 'Свойства текстового поля',
		name: 'Имя',
		value: 'Значение',
		charWidth: 'Ширина поля (в символах)',
		maxChars: 'Макс. количество символов',
		type: 'Тип содержимого',
		typeText: 'Текст',
		typePass: 'Пароль'
	},

	// Hidden Field Dialog.
	hidden: {
		title: 'Свойства скрытого поля',
		name: 'Имя',
		value: 'Значение'
	},

	// Image Dialog.
	image: {
		title: 'Свойства изображения',
		titleButton: 'Свойства изображения-кнопки',
		menu: 'Свойства изображения',
		infoTab: 'Данные об изображении',
		btnUpload: 'Загрузить на сервер',
		upload: 'Загрузить',
		alt: 'Альтернативный текст',
		lockRatio: 'Сохранять пропорции',
		resetSize: 'Вернуть обычные размеры',
		border: 'Граница',
		hSpace: 'Гориз. отступ',
		vSpace: 'Вертик. отступ',
		alertUrl: 'Пожалуйста, введите ссылку на изображение',
		linkTab: 'Ссылка',
		button2Img: 'Вы желаете преобразовать это изображение-кнопку в обычное изображение?',
		img2Button: 'Вы желаете преобразовать это обычное изображение в изображение-кнопку?',
		urlMissing: 'Не указана ссылка на изображение.',
		validateBorder: 'Размер границ должен быть задан числом.',
		validateHSpace: 'Горизонтальный отступ должен быть задан числом.',
		validateVSpace: 'Вертикальный отступ должен быть задан числом.'
	},

	// Flash Dialog
	flash: {
		properties: 'Свойства Flash',
		propertiesTab: 'Свойства',
		title: 'Свойства Flash',
		chkPlay: 'Автоматическое воспроизведение',
		chkLoop: 'Повторять',
		chkMenu: 'Включить меню Flash',
		chkFull: 'Разрешить полноэкранный режим',
		scale: 'Масштабировать',
		scaleAll: 'Пропорционально',
		scaleNoBorder: 'Заходить за границы',
		scaleFit: 'Заполнять',
		access: 'Доступ к скриптам',
		accessAlways: 'Всегда',
		accessSameDomain: 'В том же домене',
		accessNever: 'Никогда',
		alignAbsBottom: 'По низу текста',
		alignAbsMiddle: 'По середине текста',
		alignBaseline: 'По базовой линии',
		alignTextTop: 'По верху текста',
		quality: 'Качество',
		qualityBest: 'Лучшее',
		qualityHigh: 'Высокое',
		qualityAutoHigh: 'Запуск на высоком',
		qualityMedium: 'Среднее',
		qualityAutoLow: 'Запуск на низком',
		qualityLow: 'Низкое',
		windowModeWindow: 'Обычный',
		windowModeOpaque: 'Непрозрачный',
		windowModeTransparent: 'Прозрачный',
		windowMode: 'Взаимодействие с окном',
		flashvars: 'Переменные для Flash',
		bgcolor: 'Цвет фона',
		hSpace: 'Гориз. отступ',
		vSpace: 'Вертик. отступ',
		validateSrc: 'Вы должны ввести ссылку',
		validateHSpace: 'Горизонтальный отступ задается числом.',
		validateVSpace: 'Вертикальный отступ задается числом.'
	},

	// Speller Pages Dialog
	spellCheck: {
		toolbar: 'Проверить орфографию',
		title: 'Проверка орфографии',
		notAvailable: 'Извините, но в данный момент сервис недоступен.',
		errorLoading: 'Произошла ошибка при подключении к серверу проверки орфографии: %s.',
		notInDic: 'Отсутствует в словаре',
		changeTo: 'Изменить на',
		btnIgnore: 'Пропустить',
		btnIgnoreAll: 'Пропустить всё',
		btnReplace: 'Заменить',
		btnReplaceAll: 'Заменить всё',
		btnUndo: 'Отменить',
		noSuggestions: '- Варианты отсутствуют -',
		progress: 'Орфография проверяется...',
		noMispell: 'Проверка орфографии завершена. Ошибок не найдено',
		noChanges: 'Проверка орфографии завершена. Не изменено ни одного слова',
		oneChange: 'Проверка орфографии завершена. Изменено одно слово',
		manyChanges: 'Проверка орфографии завершена. Изменено слов: %1',
		ieSpellDownload: 'Модуль проверки орфографии не установлен. Хотите скачать его?'
	},

	smiley: {
		toolbar: 'Смайлы',
		title: 'Вставить смайл',
		options: 'Выбор смайла'
	},

	elementsPath: {
		eleLabel: 'Путь элементов',
		eleTitle: 'Элемент %1'
	},

	numberedlist: 'Вставить / удалить нумерованный список',
	bulletedlist: 'Вставить / удалить маркированный список',
	indent: 'Увеличить отступ',
	outdent: 'Уменьшить отступ',

	justify: {
		left: 'По левому краю',
		center: 'По центру',
		right: 'По правому краю',
		block: 'По ширине'
	},

	blockquote: 'Цитата',

	clipboard: {
		title: 'Вставить',
		cutError: 'Настройки безопасности вашего браузера не разрешают редактору выполнять операции по вырезке текста. Пожалуйста, используйте для этого клавиатуру (Ctrl/Cmd+X).',
		copyError: 'Настройки безопасности вашего браузера не разрешают редактору выполнять операции по копированию текста. Пожалуйста, используйте для этого клавиатуру (Ctrl/Cmd+C).',
		pasteMsg: 'Пожалуйста, вставьте текст в зону ниже, используя клавиатуру (<strong>Ctrl/Cmd+V</strong>) и нажмите кнопку "OK".',
		securityMsg: 'Настройки безопасности вашего браузера не разрешают редактору напрямую обращаться к буферу обмена. Вы должны вставить текст снова в это окно.',
		pasteArea: 'Зона для вставки'
	},

	pastefromword: {
		confirmCleanup: 'Текст, который вы желаете вставить, по всей видимости, был скопирован из Word. Следует ли очистить его перед вставкой?',
		toolbar: 'Вставить из Word',
		title: 'Вставить из Word',
		error: 'Невозможно очистить вставленные данные из-за внутренней ошибки'
	},

	pasteText: {
		button: 'Вставить только текст',
		title: 'Вставить только текст'
	},

	templates: {
		button: 'Шаблоны',
		title: 'Шаблоны содержимого',
		options: 'Параметры шаблона',
		insertOption: 'Заменить текущее содержимое',
		selectPromptMsg: 'Пожалуйста, выберите, какой шаблон следует открыть в редакторе',
		emptyListMsg: '(не определено ни одного шаблона)'
	},

	showBlocks: 'Отображать блоки',

	stylesCombo: {
		label: 'Стили',
		panelTitle: 'Стили форматирования',
		panelTitle1: 'Стили блока',
		panelTitle2: 'Стили элемента',
		panelTitle3: 'Стили объекта'
	},

	format: {
		label: 'Форматирование',
		panelTitle: 'Форматирование',

		tag_p: 'Обычное',
		tag_pre: 'Моноширинное',
		tag_address: 'Адрес',
		tag_h1: 'Заголовок 1',
		tag_h2: 'Заголовок 2',
		tag_h3: 'Заголовок 3',
		tag_h4: 'Заголовок 4',
		tag_h5: 'Заголовок 5',
		tag_h6: 'Заголовок 6',
		tag_div: 'Обычное (div)'
	},

	div: {
		title: 'Создать Div-контейнер',
		toolbar: 'Создать Div-контейнер',
		cssClassInputLabel: 'Классы CSS',
		styleSelectLabel: 'Стиль',
		IdInputLabel: 'Идентификатор',
		languageCodeInputLabel: 'Код языка',
		inlineStyleInputLabel: 'Стиль элемента',
		advisoryTitleInputLabel: 'Заголовок',
		langDirLabel: 'Направление текста',
		langDirLTRLabel: 'Слева направо (LTR)',
		langDirRTLLabel: 'Справа налево (RTL)',
		edit: 'Редактировать контейнер',
		remove: 'Удалить контейнер'
	},

	iframe: {
		title: 'Свойства iFrame',
		toolbar: 'iFrame',
		noUrl: 'Пожалуйста, введите ссылку фрейма',
		scrolling: 'Отображать полосы прокрутки',
		border: 'Показать границы фрейма'
	},

	font: {
		label: 'Шрифт',
		voiceLabel: 'Шрифт',
		panelTitle: 'Шрифт'
	},

	fontSize: {
		label: 'Размер',
		voiceLabel: 'Размер шрифта',
		panelTitle: 'Размер шрифта'
	},

	colorButton: {
		textColorTitle: 'Цвет текста',
		bgColorTitle: 'Цвет фона',
		panelTitle: 'Цвета',
		auto: 'Автоматически',
		more: 'Ещё цвета...'
	},

	colors: {
		'000': 'Чёрный',
		'800000': 'Бордовый',
		'8B4513': 'Кожано-коричневый',
		'2F4F4F': 'Темный синевато-серый',
		'008080': 'Сине-зелёный',
		'000080': 'Тёмно-синий',
		'4B0082': 'Индиго',
		'696969': 'Тёмно-серый',
		'B22222': 'Кирпичный',
		'A52A2A': 'Коричневый',
		'DAA520': 'Золотисто-берёзовый',
		'006400': 'Темно-зелёный',
		'40E0D0': 'Бирюзовый',
		'0000CD': 'Умеренно синий',
		'800080': 'Пурпурный',
		'808080': 'Серый',
		'F00': 'Красный',
		'FF8C00': 'Темно-оранжевый',
		'FFD700': 'Золотистый',
		'008000': 'Зелёный',
		'0FF': 'Васильковый',
		'00F': 'Синий',
		'EE82EE': 'Фиолетовый',
		'A9A9A9': 'Тускло-серый',
		'FFA07A': 'Светло-лососевый',
		'FFA500': 'Оранжевый',
		'FFFF00': 'Жёлтый',
		'00FF00': 'Лайма',
		'AFEEEE': 'Бледно-синий',
		'ADD8E6': 'Свелто-голубой',
		'DDA0DD': 'Сливовый',
		'D3D3D3': 'Светло-серый',
		'FFF0F5': 'Розово-лавандовый',
		'FAEBD7': 'Античный белый',
		'FFFFE0': 'Светло-жёлтый',
		'F0FFF0': 'Медвяной росы',
		'F0FFFF': 'Лазурный',
		'F0F8FF': 'Бледно-голубой',
		'E6E6FA': 'Лавандовый',
		'FFF': 'Белый'
	},

	scayt: {
		title: 'Проверка орфографии по мере ввода (SCAYT)',
		opera_title: 'Не поддерживается Opera',
		enable: 'Включить SCAYT',
		disable: 'Отключить SCAYT',
		about: 'О SCAYT',
		toggle: 'Переключить SCAYT',
		options: 'Настройки',
		langs: 'Языки',
		moreSuggestions: 'Ещё варианты',
		ignore: 'Пропустить',
		ignoreAll: 'Пропустить всё',
		addWord: 'Добавить слово',
		emptyDic: 'Вы должны указать название словаря.',

		optionsTab: 'Параметры',
		allCaps: 'Игнорировать слова из заглавных букв',
		ignoreDomainNames: 'Игнорировать доменные имена',
		mixedCase: 'Игнорировать слова из букв в разном регистре',
		mixedWithDigits: 'Игнорировать слова, содержащие цифры',

		languagesTab: 'Языки',

		dictionariesTab: 'Словари',
		dic_field_name: 'Название словаря',
		dic_create: 'Создать',
		dic_restore: 'Восстановить',
		dic_delete: 'Удалить',
		dic_rename: 'Переименовать',
		dic_info: 'Изначально, пользовательский словарь хранится в cookie, которые ограничены в размере. Когда словарь пользователя вырастает до размеров, что его невозможно хранить в cookie, он переносится на хранение на наш сервер. Чтобы сохранить ваш словарь на нашем сервере, вам следует указать название вашего словаря. Если у вас уже был словарь, который вы сохраняли на нашем сервере, то укажите здесь его название и нажмите кнопку Восстановить.',

		aboutTab: 'О SCAYT'
	},

	about: {
		title: 'О CKEditor',
		dlgTitle: 'О CKEditor',
		help: '$1 содержит подробную справку по использованию.',
		userGuide: 'Руководство пользователя CKEditor',
		moreInfo: 'Для получения информации о лицензии, пожалуйста, перейдите на наш сайт:',
		copy: 'Copyright &copy; $1. Все права защищены.'
	},

	maximize: 'Развернуть',
	minimize: 'Свернуть',

	fakeobjects: {
		anchor: 'Якорь',
		flash: 'Flash анимация',
		iframe: 'iFrame',
		hiddenfield: 'Скрытое поле',
		unknown: 'Неизвестный объект'
	},

	resize: 'Перетащите для изменения размера',

	colordialog: {
		title: 'Выберите цвет',
		options: 'Настройки цвета',
		highlight: 'Под курсором',
		selected: 'Выбранный цвет',
		clear: 'Очистить'
	},

	toolbarCollapse: 'Свернуть панель инструментов',
	toolbarExpand: 'Развернуть панель инструментов',

	toolbarGroups: {
		document: 'Документ',
		clipboard: 'Буфер обмена / Отмена действий',
		editing: 'Корректировка',
		forms: 'Формы',
		basicstyles: 'Простые стили',
		paragraph: 'Абзац',
		links: 'Ссылки',
		insert: 'Вставка',
		styles: 'Стили',
		colors: 'Цвета',
		tools: 'Инструменты'
	},

	bidi: {
		ltr: 'Направление текста слева направо',
		rtl: 'Направление текста справа налево'
	},

	docprops: {
		label: 'Свойства документа',
		title: 'Свойства документа',
		design: 'Дизайн',
		meta: 'Метаданные',
		chooseColor: 'Выберите',
		other: 'Другой ...',
		docTitle: 'Заголовок страницы',
		charset: 'Кодировка набора символов',
		charsetOther: 'Другая кодировка набора символов',
		charsetASCII: 'ASCII',
		charsetCE: 'Центрально-европейская',
		charsetCT: 'Китайская традиционная (Big5)',
		charsetCR: 'Кириллица',
		charsetGR: 'Греческая',
		charsetJP: 'Японская',
		charsetKR: 'Корейская',
		charsetTR: 'Турецкая',
		charsetUN: 'Юникод (UTF-8)',
		charsetWE: 'Западно-европейская',
		docType: 'Заголовок типа документа',
		docTypeOther: 'Другой заголовок типа документа',
		xhtmlDec: 'Включить объявления XHTML',
		bgColor: 'Цвет фона',
		bgImage: 'Ссылка на фоновое изображение',
		bgFixed: 'Фон прикреплён (не проматывается)',
		txtColor: 'Цвет текста',
		margin: 'Отступы страницы',
		marginTop: 'Верхний',
		marginLeft: 'Левый',
		marginRight: 'Правый',
		marginBottom: 'Нижний',
		metaKeywords: 'Ключевые слова документа (через запятую)',
		metaDescription: 'Описание документа',
		metaAuthor: 'Автор',
		metaCopyright: 'Авторские права',
		previewHtml: '<p>Это <strong>пример</strong> текста, написанного с помощью <a href="javascript:void(0)">CKEditor</a>.</p>'
	}
};
