Feature: Access Google
    Googleの検索ページのテスト

    Scenario: Googleの検索ページにアクセス
        Given google.comにアクセスする
        Then タイトルにGoogleがある