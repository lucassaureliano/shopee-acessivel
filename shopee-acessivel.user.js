// ==UserScript==
// @name         Shopee Acessível
// @namespace    http://tampermonkey.net/
// @version      2024.0.1
// @description  Torna os resultados da busca visíveis para o leitor de telas.
// @author       Lucas Aureliano
// @match        https://*.shopee.com.br/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shopee.com.br
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var elements = document.querySelectorAll('.shopee-search-item-result__items li div div');
    elements.forEach(function(element) {
        element.setAttribute('aria-hidden', 'false');
    });
})();