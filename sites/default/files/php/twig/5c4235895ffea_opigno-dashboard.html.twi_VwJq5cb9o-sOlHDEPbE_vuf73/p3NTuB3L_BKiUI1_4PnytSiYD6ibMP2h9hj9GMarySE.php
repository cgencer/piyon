<?php

/* profiles/opigno_lms/modules/opigno/opigno_dashboard/templates/opigno-dashboard.html.twig */
class __TwigTemplate_829f2e892c0ae9ed897f183d72f8e0bc791d690ee0a85035dae689fc992c2d63 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array();
        $filters = array("raw" => 11, "t" => 13);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array(),
                array('raw', 't'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<base href=\"";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (($context["base_path"] ?? null) . ($context["base_href"] ?? null)), "html", null, true));
        echo "\">

<script type=\"text/javascript\">
  window.appConfig = {
    columns: 3,
    positions: [[], [], [], []],
    apiBaseUrl: '";
        // line 7
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["base_path"] ?? null), "html", null, true));
        echo "',
    getPositioningUrl: '/opigno_dashboard/get-positioning',
    setPositioningUrl: '/opigno_dashboard/set-positioning',
    getBlocksContentUrl: '/opigno_dashboard/get-blocks',
    defaultConfig: '";
        // line 11
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["default_config"] ?? null)));
        echo "',
    locales: {
      manageYourDashboard: '";
        // line 13
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Manage your dashboard")));
        echo "',
      remove: '";
        // line 14
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("remove")));
        echo "',
      close: '";
        // line 15
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("close")));
        echo "',
      layout: '";
        // line 16
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Layout")));
        echo "',
      oneColumn: '";
        // line 17
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("1 column")));
        echo "',
      twoColumns: '";
        // line 18
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("2 columns")));
        echo "',
      asymColumns: '";
        // line 19
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("1/3-2/3 columns")));
        echo "',
      threeColumns: '";
        // line 20
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("3 columns")));
        echo "',
      addBlocks: '";
        // line 21
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Add blocks by dragging them below into the canvas")));
        echo "',
      restoreYourDashboard: '";
        // line 22
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Restore your dashboard to default:")));
        echo "',
      restoreToDefault: '";
        // line 23
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("restore to default")));
        echo "'
    }
  };
</script>

<app-root class=\"d-block dashboard\">";
        // line 28
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Loading dashboard...")));
        echo "</app-root>
";
    }

    public function getTemplateName()
    {
        return "profiles/opigno_lms/modules/opigno/opigno_dashboard/templates/opigno-dashboard.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  113 => 28,  105 => 23,  101 => 22,  97 => 21,  93 => 20,  89 => 19,  85 => 18,  81 => 17,  77 => 16,  73 => 15,  69 => 14,  65 => 13,  60 => 11,  53 => 7,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "profiles/opigno_lms/modules/opigno/opigno_dashboard/templates/opigno-dashboard.html.twig", "/home/piyon/o2/profiles/opigno_lms/modules/opigno/opigno_dashboard/templates/opigno-dashboard.html.twig");
    }
}
