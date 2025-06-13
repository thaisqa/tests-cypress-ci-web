Feature: Login

  Scenario: Login com sucesso
    Given que estou na página de login
    When preencho usuário e senha válidos
    And clico em login
    Then vejo a página inicial