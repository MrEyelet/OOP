$(function(){

	function randomString() {//generowanie id z ciągu 10 losowo wybranych znaków
		var chars = '0123456789abcdefghijklmnoprstowxyzABCDEFGHIJKLMNOPRSTOWXYZ';
		var str = '';
		var i = 0;
		for(i = 0; i <10; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
		//funkcja losuje 10 elementów z tablicy znaków chars
		//i skłąda je w jeden string
	}

	function Column(name) {//klasa Column
		var self = this; // self dla funkcji zagnieżdżonych,
		//żeby nie stracić  kontekstu
		this.id = randomString();
		this.name = name;
		this.$element = createColumn();

		function createColumn() {//funkcja robiąca kolumny
			//tworzenie elementów składowych kolumn
			var $column = $('<div>').addClass('columns');
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-card-list');
			var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');
			var $columnDelete = $('<button>').addClass('btn-delete').text('x');
			

			//Podpinanie odpowiednich zdarzeń
			$columnDelete.click(function() {//kasowanie kolumny po kliknięciu w przycisk
				self.removeColumn();
			});
			$columnAddCard.click(function(event) {
    			self.addCard(new Card(prompt("Wpisz nazwę karty")));

			});

			//konstruowanie elementu kolumny
			$column.append($columnTitle)
					.append($columnAddCard)
					.append($columnDelete)
					.append($columnCardList);
			return $column;//zwracanie stworzonej kolumny
		}
	}

	Column.prototype = {
			addCard: function(card) {
				this.$element.children('ul').append(card.$element);
			},
			removeColumn: function() {
				this.$element.remove();
			}
		};

	function Card(description) {//klasa Card
		var self = this;//self dla funkcji zagnieżdżonych
		//żeby nie stracić kontekstu
		this.id = randomString();
		this.description = description;
		this.$element = createCard();

		function createCard() {//funkcja robiąca karty
		//tworzenie elementów skłądowych karty
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button>').addClass('btn-delete').text('x');

			//Podpięcie zdarzenia, które usuwa kartę
			$cardDelete.click(function() {
				self.removeCard();
			});

			//konstruowanie elementu karty
			$card.append($cardDelete)
				 .append($cardDescription);
			return $card;
		}
	}
	Card.prototype = {
		removeCard: function() {
			this.$element.remove();
		}
	}

	var board = {
		name: 'Tablica Kanban',
		addColumn: function(column) {
			this.$element.append(column.$element);
			initSortable();
		},
		$element: $('#board .column-container')
	};

	function initSortable() {
		$('.column-card-list').sortable({
			connectWith: '.column-card-list',
			placeholder: 'card-placeholder'
		}).disableSelection();
	}

	$('.create-column').click(function() {
		var name = prompt("Wpisz nazwę");
		var column = new Column(name);
		board.addColumn(column);
	});

	//Tworzenie kolumn
	var todoColumn = new Column('Do zrobienia');
	var doingColumn = new Column('W trakcie');
	var doneColumn = new Column('Skończone');


	//Dodawanie kolumn do tablicy
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	//Tworzenie nowych egzemplarzy kart
	var card1 = new Card('Uczyć się javaScript');
	var card2 = new Card('Uczyć się więcej javaScript');

	//Dodawanie kart do kolumn
	todoColumn.addCard(card1);
	doingColumn.addCard(card2);
});