$(function() {
	function randomString() {
	    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
	    var str = '';
	    var i = 0;
	    for (i = 0; i < 10; i++) {
	        str += chars[Math.floor(Math.random() * chars.length)];
	    }
	    return str;
	}
	function Column(name) {
	    var self = this;
	    this.id = randomString();
	    this.name = name;
	    this.$element = createColumn();
    	function createColumn() {
	    	var $column = $('<div>').addClass('column-kanban');
			var $columnTitle = $('<h2>').addClass('column-kanban__header').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-kanban__card_list');
			var $columnDelete = $('<button>').addClass('column-kanban__btn_deleteColumn').text('x');
			var $columnAddCard = $('<button>').addClass('column-kanban__btn_addCard').text('Dodaj kartę');
			$columnDelete.click(function() {
	        	self.removeColumn();
			});
			$columnAddCard.click(function() {
			    var result = self.addCard(new Card(prompt("Wpisz nazwę karty")));
			});
			$column.append($columnTitle)
	        .append($columnDelete)
	        .append($columnAddCard)
	        .append($columnCardList);
			return $column
    }
  	};
  	Column.prototype = {
    	addCard: function(card) {
      		this.$element.children('ul').append(card.$element);
    	},
    	removeColumn: function() {
      		this.$element.remove();
    	}
	};
	function Card(description) {
		var self = this;
		this.id = randomString();
		this.description = description;
		this.$element = createCard(); //
		function createCard() {
			var $card = $('<li>').addClass('column__kanban_card');
			var $cardDescription = $('<p>').addClass('column-kanban__card_description').text(self.description);
			var $cardDelete = $('<button>').addClass('column-kanban__btn_deleteCard').text('x');
			$cardDelete.click(function(){
       			self.removeCard();
			});
		$card.append($cardDescription)
			.append($cardDelete);
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
	      $element: $('#board .column-kanban__container')
	};

	function initSortable() {
    $('.column-kanban__card_list').sortable({
      connectWith: '.column-kanban__card_list',
      placeholder: 'column-kanban__placeholder'
    }).disableSelection();
   	}
  	$('.column-kanban__card_list').sortable();
  	$('.column-kanban__btn_columnCreator')
  	.click(function(){
		var name = prompt('Wpisz nazwę kolumny');
		var column = new Column(name);
	    	board.addColumn(column);
  	});

	var todoColumn = new Column('Do zrobienia');
	var doingColumn = new Column('W trakcie');
	var doneColumn = new Column('Skończone');
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);
	todoColumn.addCard(card1);
	doingColumn.addCard(card2);
})