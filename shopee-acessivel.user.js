// ==UserScript==
// @name         Shopee Acessível
// @namespace    http://tampermonkey.net/
// @version      2025.8.6
// @description  Torna os resultados da busca visíveis para o leitor de telas e adiciona atributos de acessibilidade.
// @author       Lucas Aureliano
// @match        https://*.shopee.com.br/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shopee.com.br
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function updateAccessibility() {
        document.querySelectorAll('ul.row.shopee-search-item-result__items > li').forEach(e => {
            e.querySelectorAll('[aria-hidden]').forEach(a => a.removeAttribute('aria-hidden'));
            e.querySelectorAll('[aria-label]').forEach(a => a.removeAttribute('aria-label'));
            e.querySelectorAll('img').forEach(img => img.setAttribute('alt', ''));
            e.querySelectorAll('div.whitespace-normal, div.line-clamp-2').forEach(div => {
                div.setAttribute('role', 'heading');
                div.setAttribute('aria-level', '2');
                div.setAttribute('tabindex', '0');
            });
        });
    }

    window.addEventListener('load', function() {
        updateAccessibility();
    });

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            updateAccessibility();
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();

