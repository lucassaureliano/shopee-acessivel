// ==UserScript==
// @name         Shopee Acessível
// @namespace    http://tampermonkey.net/
// @version      2024.1
// @description  Torna os resultados da busca visíveis para o leitor de telas.
// @author       Lucas Aureliano
// @match        https://*.shopee.com.br/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shopee.com.br
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function changeAriaHidden() {
        var elements = document.querySelectorAll('.shopee-search-item-result__items li div div');
        elements.forEach(function(element) {
            element.setAttribute('aria-hidden', 'false');
        });
    }

    window.addEventListener('load', function() {
        changeAriaHidden();
    });

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            changeAriaHidden();
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
