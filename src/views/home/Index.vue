<template>
    <layout>
        <template #content>
           

              <div class="container">
      <div class="breadcrumbs">
      </div>
    </div>

    <main class="container">

      <h1>ページ一覧</h1>


      <div>
        <router-link :to="{name: 'customerregistration'}" target="_blank">
            お客様登録(5)
        </router-link><br>

        <router-link :to="{name: 'confirmationscreen'}" target="_blank">
            お客様登録：確認画面(5_1)
        </router-link><br>

        <router-link :to="{name: 'completed'}" target="_blank">
            お客様登録：完了(5_2)
        </router-link><br>

      </div>
        <hr>
      <div>

        <router-link :to="{name: 'manageorderinformation'}" target="_blank">
            注文者情報の管理(10)
        </router-link><br>

        <router-link :to="{name: 'Registerorderinformation'}" target="_blank">
             注文者情報の登録(13)
        </router-link><br>

        <router-link :to="{name: 'confirm'}" target="_blank">
             注文者情報の管理：確認画面(13_2)
        </router-link><br>

        <router-link :to="{name: 'complete133'}" target="_blank">
             注文者情報の管理：完了(13_3)
        </router-link><br>

         <router-link :to="{name: 'admin'}" target="_blank">
              管理者情報の管理(9)
        </router-link><br>
      </div>

      <hr>

      <div>
        <router-link :to="{name: 'login'}" target="_blank">
              ログイン画面(4)
        </router-link><br>
      </div>

      <hr>

      <div>
        <router-link :to="{name: 'mypage'}" target="_blank">
          マイページTOP(1)
        </router-link><br>

        <router-link :to="{name: 'orderhistorybymonth'}" target="_blank">
          注文履歴・「月次」帳票(7)
        </router-link><br>

        <router-link :to="{name: 'orderhistorybydate'}" target="_blank">
          注文履歴・「日次」帳票(6)
        </router-link><br>

        <router-link :to="{name: 'orderdate'}" target="_blank">
          注文履歴・「日次」帳票：詳細(6_2)
        </router-link><br>

        <router-link :to="{name:'question'}" target="_blank">
          お問い合わせ(11)
        </router-link>

      </div>

      <hr>

      <div>
       <router-link :to="{name: 'order1day'}" target="_blank">
            カレンダーTOP-注文者：単一日選択用(2)
        </router-link><br>

        <router-link :to="{name: 'orderdays'}" target="_blank">
           カレンダーTOP-注文者：複数日選択用(2_2)
        </router-link><br>
        
        <router-link :to="{name: 'calendartop1day'}" target="_blank">
           カレンダーTOP-管理者：単一日選択用(2_3)
        </router-link><br>

        <router-link :to="{name: 'calendartopdays'}" target="_blank">
           カレンダーTOP-管理者：複数日選択用(2_4)
        </router-link><br>

        <router-link :to="{name: 'orderConfirmation'}" target="_blank">
          注文内容の確認-管理者：管理者専用(2_3_2)
        </router-link><br>

         <router-link :to="{name: 'orderscreen'}" target="_blank">
         注文画面（変更・商品選択入力）(3)
        </router-link><br>

        <router-link :to="{name: 'ordercompleted'}" target="_blank">
        注文済み：注文画面（変更・商品選択入力）(3_1_2)
        </router-link><br>

        <router-link :to="{name: 'orderscreen32'}" target="_blank">
        注文画面（お支払い方法選択・注文内容の確認）(3_2)
        </router-link><br>

        <router-link :to="{name: 'orderscreenclear'}" target="_blank">
       注文画面（削除）(3_3)
        </router-link><br>

        <router-link :to="{name: 'ordercompletionscreen'}" target="_blank">
      注文画面（完了）(3_4)
        </router-link><br>

      </div>

      <hr>


      <div>
        <router-link :to="{name: 'listannouncement'}" target="_blank">
            お知らせ（一覧）(8)
        </router-link><br>

        <router-link :to="{name: 'detailednotice'}" target="_blank">
            お知らせ（詳細）(8_2)
        </router-link>
      </div>

      <hr>

      <div>
        <router-link :to="{name: 'support111'}" target="_blank">
            ヘルプ(12)
        </router-link>
      </div>


    </main>
        </template>
    </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
</script>